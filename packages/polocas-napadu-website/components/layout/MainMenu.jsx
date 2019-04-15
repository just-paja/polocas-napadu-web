import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import { Link } from '../bindings'
import { withNamespaces } from '../../lib/i18n'
import { withStyles } from '@material-ui/core/styles'
import { ContentContainer } from './ContentContainer'

const styles = (theme) => ({
  menuItem: {
    textTransform: 'uppercase',
    '@global': {
      a: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none'
      }
    }
  }
})

const MainMenuInner = ({ classes, t }) => (
  <AppBar position='static'>
    <Toolbar>
      <ContentContainer>
        <Grid container spacing={24}>
          <Grid className={classes.menuItem} item>
            <Link route='home'><a>{t('projectName')}</a></Link>
          </Grid>
          <Grid className={classes.menuItem} item>
            <Link route='showList'><a>{t('shows')}</a></Link>
          </Grid>
        </Grid>
      </ContentContainer>
    </Toolbar>
  </AppBar>
)

export const MainMenu = withNamespaces(['navigation'])(withStyles(styles)(MainMenuInner))
