import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import { ContentContainer } from './ContentContainer'
import { Link } from '../bindings'
import { propsStyled, propsTranslated } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'
import { withStyles } from '@material-ui/core/styles'

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

const MainMenuComponent = ({ classes, t }) => (
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

MainMenuComponent.propTypes = {
  ...propsStyled,
  ...propsTranslated
}

export const MainMenu = withNamespaces(['navigation'])(withStyles(styles)(MainMenuComponent))
