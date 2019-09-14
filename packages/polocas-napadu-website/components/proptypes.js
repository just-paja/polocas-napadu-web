import PropTypes from 'prop-types'

export const Children = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node)
])

export const Classes = PropTypes.objectOf(PropTypes.string)

export const ClassName = PropTypes.oneOfType([
  Classes,
  PropTypes.arrayOf(Classes),
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string
])

export const ErrorType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
})

export const LocationProp = PropTypes.shape({
  name: PropTypes.string.isRequired
})

export const Show = PropTypes.shape({
  id: PropTypes.string.isRequired,
  location: LocationProp.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string,
  start: PropTypes.string.isRequired
})

export const I18n = PropTypes.shape({
  options: PropTypes.shape({
    allLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultLanguage: PropTypes.string
  })
})

export const Router = PropTypes.shape({
  pathname: PropTypes.string
})

export const UsualPlaceProp = PropTypes.shape({
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: LocationProp.isRequired,
  name: PropTypes.string.isRequired,
  placeType: PropTypes.number.isRequired
})

export const propsStyled = {
  classes: Classes.isRequired
}

export const propsTranslated = {
  t: PropTypes.func.isRequired
}

export const propsWithRouter = {
  router: Router.isRequired
}
