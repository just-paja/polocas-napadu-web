import { Link } from '../../routes'
export { Link } from '../../routes'

export function OptionalLink ({ children, isLink, ...props }) {
  return isLink
    ? <Link {...props} passHref><a>{children}</a></Link>
    : <>{children}</>
}
