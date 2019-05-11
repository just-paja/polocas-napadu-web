import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react'

import { Link } from '../bindings'
import { propsTranslated } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'

const MainMenuComponent = ({ t }) => (
  <Navbar
    collapseOnSelect
    bg='primary'
    sticky='top'
    expand='lg'
    variant='dark'
  >
    <Container>
      <Link passHref route='home'>
        <Navbar.Brand>{t('projectName')}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='app-menu' />
      <Navbar.Collapse id='app-menu'>
        <Nav className='mr-auto'>
          <Link passHref route='showList'><Nav.Link>{t('shows')}</Nav.Link></Link>
          <Link passHref route='about'><Nav.Link>{t('about')}</Nav.Link></Link>
          <Link passHref route='contact'><Nav.Link>{t('contact')}</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

MainMenuComponent.propTypes = {
  ...propsTranslated
}

export const MainMenu = withNamespaces(['navigation'])(MainMenuComponent)
