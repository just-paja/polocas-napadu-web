import { qsm } from 'query-string-manipulator'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const useUrl = () => {
  const { asPath, params, query } = useRouter()
  const { i18n } = useTranslation()
  const path = qsm(`/${i18n.language}${asPath}`, {
    set: {
      ...params,
      ...query,
    },
  })
  return path
}
