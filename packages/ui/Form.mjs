import Alert from 'react-bootstrap/Alert'
import FormCheck from 'react-bootstrap/FormCheck'
import classnames from 'classnames'
import React, { forwardRef, useCallback, useState } from 'react'

import { Form as BsForm } from 'react-bootstrap'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { Button } from './Button.mjs'
import { useTranslation } from 'next-i18next'
import { InputLabel } from './Input.mjs'

const ReflessControlledForm = ({ children, id, onSubmit, ...props }, ref) => (
  <BsForm noValidate id={id} onSubmit={onSubmit} ref={ref} {...props}>
    {children}
  </BsForm>
)

export const ControlledForm = forwardRef(ReflessControlledForm)

const ReflessForm = (
  { defaultValues, children, id, onSubmit, resolver, ...props },
  ref
) => {
  const [processingError, setProcessingError] = useState(null)
  const methods = useForm({ defaultValues, resolver })
  const { handleSubmit, setError } = methods
  const protectedSubmit = useCallback(
    async values => {
      try {
        setProcessingError(null)
        return await onSubmit(values)
      } catch (e) {
        setProcessingError(e)
        // @FIXME This error should be reported to Sentry
        console.error(e)
        if (e.body) {
          const formErrors = Object.entries(e.body).filter(
            ([key]) => key !== 'nonFieldErrors'
          )
          for (const [field, fieldErrors] of formErrors) {
            for (const fieldError of fieldErrors) {
              setError(field, { message: fieldError })
            }
          }
        }
        return null
      }
    },
    [onSubmit, setError, setProcessingError]
  )
  return (
    <FormProvider formId={id} processingError={processingError} {...methods}>
      <ControlledForm
        {...props}
        id={id}
        onSubmit={handleSubmit(protectedSubmit)}
        ref={ref}
      >
        {children}
      </ControlledForm>
    </FormProvider>
  )
}

export const Form = forwardRef(ReflessForm)

const resolveType = type => {
  if (type === 'checkbox') {
    return undefined
  }
  if (type === 'select') {
    return 'select'
  }
  if (type === 'textarea') {
    return 'textarea'
  }
  return 'input'
}

const resolveComponent = (type, as) => {
  if (as) {
    return as
  }
  if (type === 'checkbox' || type === 'radio') {
    return FormCheck.Input
  }
  if (type === 'select') {
    return BsForm.Select
  }
  return BsForm.Control
}

const rightLabelMap = ['checkbox', 'radio']

const isLabelRight = type => rightLabelMap.includes(type)

const getOptions = (options, required) => {
  let opts = null
  if (options) {
    opts = options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))

    if (!required) {
      opts.unshift(
        <option value="" key={null}>
          - - -
        </option>
      )
    }
  }
  return opts
}

const describeError = (t, error) => {
  if (error.message) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  if (error.type) {
    return t(`error-input-${error.type}`)
  }
  return t('error-unknown')
}

const getChangeWrapper = (field, onChange) => e => {
  onChange(e)
  field.onChange(e)
}

export const FormlessInput = forwardRef(function InnerForlessInput(
  {
    as,
    className,
    error,
    id,
    label,
    name,
    options,
    helpText,
    required,
    type,
    ...props
  },
  ref
) {
  const { formId, formState, watch } = useFormContext()
  const { t } = useTranslation()
  const rightLabel = isLabelRight(type)
  const controlId =
    id || `${formId}-${name}${rightLabel ? `-${props.value}` : ''}`
  const htmlOptions = getOptions(options, required)
  const Component = resolveComponent(type, as)
  const fieldError = error || formState.errors[name]
  const currentValue = watch(name)
  const inputProps = {}
  if (type === 'checkbox') {
    inputProps.value = props.value || 'true'
  }
  if (type === 'radio') {
    inputProps.checked = currentValue === props.value
    inputProps.value = props.value
  }
  return (
    <BsForm.Group
      controlId={controlId}
      className={classnames('mt-2', {
        'form-check': rightLabel,
      })}
    >
      {label && !rightLabel ? (
        <InputLabel required={required} text={label} />
      ) : null}
      <Component
        as={resolveType(type)}
        disabled={formState.isSubmitting}
        isInvalid={Boolean(fieldError)}
        name={name}
        type={type}
        {...inputProps}
        {...props}
        className={className}
        ref={ref}
      >
        {htmlOptions}
      </Component>
      {label && rightLabel ? (
        <InputLabel colon={false} text={label} required={required} formCheck />
      ) : null}
      {fieldError ? (
        <BsForm.Control.Feedback type="invalid">
          {describeError(t, fieldError)}
        </BsForm.Control.Feedback>
      ) : null}
      {helpText ? <BsForm.Text as="div">{helpText}</BsForm.Text> : null}
    </BsForm.Group>
  )
})

export const Input = ({ name, onChange, validate, ...props }) => {
  const { register } = useFormContext()
  const field = register(name, {
    setValueAs: v => (['', undefined].includes(v) ? null : v),
    validate,
  })
  const handleChange = onChange
    ? getChangeWrapper(field, onChange)
    : field.onChange
  return <FormlessInput {...props} {...field} onChange={handleChange} />
}

export const Submit = ({ children, ...props }) => (
  <Button {...props} type="submit">
    {children}
  </Button>
)

const desecribeProcessingError = (t, err) => {
  if (err?.body?.nonFieldErrors) {
    return err.body.nonFieldErrors.join(',')
  }
  if (err?.body?.message) {
    return err.body.message
  }
  return t('form-failed-to-submit')
}

export const FormError = ({ vague }) => {
  const { processingError } = useFormContext()
  const { t } = useTranslation()
  if (processingError) {
    return (
      <div className="mt-3">
        <Alert variant="danger">
          {vague
            ? t('form-failed-to-submit')
            : desecribeProcessingError(t, processingError)}
        </Alert>
      </div>
    )
  }
  return null
}

export const FormControls = ({
  cancelLabel,
  children,
  disabled,
  onCancel,
  size,
  submitLabel,
}) => {
  const { t } = useTranslation()
  const { formState } = useFormContext()
  return (
    <>
      <FormError vague />
      <div className="mt-3">
        <Submit
          disabled={disabled}
          inProgress={formState.isSubmitting}
          size={size}
        >
          {submitLabel}
        </Submit>
        {children}
        {onCancel && (
          <Button
            className="ms-2"
            disabled={disabled}
            type="button"
            variant="secondary"
            size={size}
            onClick={onCancel}
          >
            {cancelLabel || t('cancel')}
          </Button>
        )}
      </div>
    </>
  )
}
