import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MobileMenu from '../MobileMenu'

export default class Header extends Component {
  render() {
    const { path, scroll, handleMobileMenu } = this.props

    return (
      <Fragment>
        <header>
          <div className={`tg-header__area transparent-header ${scroll ? 'sticky-menu' : ''}`} id="sticky-header">
            <Container className="custom-container" fluid>
              <Row>
                <Col>
                  <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                    <i className="tg-flaticon-menu-1" />
                  </div>
                  <div className="tgmenu__wrap">
                    <nav className="tgmenu__nav">
                      <div className="logo">
                        <a href="/"><img alt="Logo" src="/assets/images/logo/logo.png" /></a>
                      </div>
                      <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                        <ul className="navigation">
                          <li className={`header-btn ${path === 'home' ? 'active' : ''}`}><a href="/">Home</a></li>
                          <li className={`header-btn ${path === 'course' ? 'active' : ''}`}><a href="/course">Courses</a></li>
                          <li className={`header-btn ${path === 'about' ? 'active' : ''}`}><a href="/about">About Us</a></li>
                          <li className={`header-btn ${path === 'blog' ? 'active' : ''}`}><a href="/blog">Blog</a></li>
                          <li className={`header-btn ${path === 'contact' ? 'active' : ''}`}><a href="/contact">Contact</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu */}
                  <div className="tgmobile__menu">
                    <nav className="tgmobile__menu-box">
                      <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                      <div className="nav-logo">
                        <a href="/"><img alt="Logo" src="/assets/images/logo/logo.png" /></a>
                      </div>
                      <div className="tgmobile__menu-outer">
                        <MobileMenu path={path} />
                      </div>
                      <div className="social-links">
                        <ul className="list-wrap">
                          <li><a aria-label="Facebook" href="/"><i className="fab fa-facebook-f" /></a></li>
                          <li><a aria-label="Twitter" href="/"><i className="fab fa-twitter" /></a></li>
                          <li><a aria-label="Instagram" href="/"><i className="fab fa-instagram" /></a></li>
                          <li><a aria-label="LinkedIn" href="/"><i className="fab fa-linkedin-in" /></a></li>
                          <li><a aria-label="YouTube" href="/"><i className="fab fa-youtube" /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                  {/* End Mobile Menu */}
                </Col>
              </Row>
            </Container>
          </div>
        </header>
      </Fragment>
    )
  }
}
