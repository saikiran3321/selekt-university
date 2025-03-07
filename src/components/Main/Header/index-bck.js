import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cs from 'classnames'
import st from '../main.css'
// import MobileMenu from '../MobileMenu'

export default class Header1 extends Component {
  render() {
    const { scroll, handleMobileMenu } = this.props

    return (
      <Fragment>
        <header>
          <div className={cs(st.tgHeader__area, st.transparentHeader, { [st.stickyMenu]: scroll })} id="sticky-header">
            <Container>
              <Row>
                <Col>
                  <div className={cs(st.mobileNavToggler)} onClick={handleMobileMenu}>
                    <i className={cs(st.tgFlaticonMenu1)} />
                  </div>
                  <div className={cs(st.tgmenu__wrap)}>
                    <nav className={cs(st.tgmenu__nav)}>
                      <div className={cs(st.logo)}>
                        <a href="/">
                          <img alt="Logo" src="/assets/images/logo/logo.png" />
                        </a>
                      </div>
                      <div className={cs(st.tgmenu__navbarWrap, st.tgmenu__mainMenu, st.dNone, st.dXlFlex)}>
                        <ul className={cs(st.navigation)}>
                          <li className={cs(st.headerBtn, st.active)}><a href="/">Home</a></li>
                          <li className={cs(st.headerBtn)}><a href="/course">Courses</a></li>
                          <li className={cs(st.headerBtn)}><a href="/about">About Us</a></li>
                          <li className={cs(st.headerBtn)}><a href="/blog">Blog</a></li>
                          <li className={cs(st.headerBtn)}><a href="/contact">Contact</a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu */}
                  {/* <div className={cs(st.tgmobile__menu)}>
                    <nav className={cs(st.tgmobile__menuBox)}>
                      <div className={cs(st.closeBtn)} onClick={handleMobileMenu}>
                        <i className={cs(st.tgFlaticonClose1)} />
                      </div>
                      <div className={cs(st.navLogo)}>
                        <a href="/">
                          <img alt="Logo" src="/assets/images/logo/logo.png" />
                        </a>
                      </div>
                      <div className={cs(st.tgmobile__search)}>
                        <form action="#">
                          <input placeholder="Search here..." type="text" />
                          <button aria-label="Search for Course" type="submit">
                            <i className={cs(st.fas, st.faSearch)} />
                          </button>
                        </form>
                      </div>
                      <div className={cs(st.tgmobile__menuOuter)}>
                        <MobileMenu />
                      </div>
                      <div className={cs(st.tgmenu__action)}>
                        <ul className={cs(st.listWrap)}>
                          <li className={cs(st.headerBtn, st.loginBtn)}>
                            <a className={cs(st.btn)} href="#">Log in</a>
                          </li>
                          <li className={cs(st.headerBtn)}><a className={cs(st.btn)} href="#">Try For Free</a></li>
                        </ul>
                      </div>
                      <div className={cs(st.socialLinks)}>
                        <ul className={cs(st.listWrap)}>
                          <li><a href="#"><i className={cs(st.fab, st.faFacebookF)} /></a></li>
                          <li><a href="#"><i className={cs(st.fab, st.faTwitter)} /></a></li>
                          <li><a href="#"><i className={cs(st.fab, st.faInstagram)} /></a></li>
                          <li><a href="#"><i className={cs(st.fab, st.faLinkedinIn)} /></a></li>
                          <li><a href="#"><i className={cs(st.fab, st.faYoutube)} /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className={cs(st.tgmobile__menuBackdrop)} onClick={handleMobileMenu} /> */}
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
