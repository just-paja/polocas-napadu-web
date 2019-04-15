import { Link as RouterLink } from '../../routes'

import MuiLink from '@material-ui/core/Link'

export const Link = ({ children, ...props }) => (
  <MuiLink component={RouterLink} {...props}>
    {children}
  </MuiLink>
)
