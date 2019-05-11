import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
          <NavDropdown
            title={t('about')}
            id='about-dropdown'
          >
            <Link passHref route='about'><NavDropdown.Item>{t('about')}</NavDropdown.Item></Link>
            <Link passHref route='actors'><NavDropdown.Item>{t('actors')}</NavDropdown.Item></Link>
          </NavDropdown>
          <Link passHref route='contact'><Nav.Link>{t('contact')}</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

MainMenuComponent.propTypes = {
  ...propsTranslated
}

export const MainMenu = withNamespaces(['common'])(MainMenuComponent)
