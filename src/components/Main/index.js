import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import Home from './Home'
import Header from './Header'
// import './main.scss'
import Footer from './Footer'
import About from './About'
import Blog from './Blog'
import Course from './Course'
import Contact from './Contact'
import Breadcrumb from './Home/layout/Breadcrumb'

export default class Help extends Component {
  static propTypes = {
    selectedKey: PropTypes.string,
  }

  static defaultProps = {
    selectedKey: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      scroll: 0,
      isMobileMenu: false,
      selectedKey: this.getPathKey().key,
      selectedId: this.getPathKey().id,
    }
    this.handleMobileMenu = this.handleMobileMenu.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100
      if (scrollCheck !== this.state.scroll) {
        this.setState({ scroll: scrollCheck })
      }
    })

    window.addEventListener('popstate', this.handlePathChange)
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePathChange)
  }

  handleMobileMenu() {
    this.setState((prevState) => ({
      isMobileMenu: !prevState.isMobileMenu,
    }), () => {
      if (this.state.isMobileMenu) {
        document.body.classList.add('mobile-menu-visible')
      }
      else {
        document.body.classList.remove('mobile-menu-visible')
      }
    })
  }

  getPathKey() {
    const pathSegments = window.location.pathname.split('/').filter(Boolean)

    const key = pathSegments[0] || 'home'
    const id = pathSegments[1] || null

    return { key, id }
  }

  handlePathChange = () => {
    const { key, id } = this.getPathKey()
    this.setState({ selectedKey: key, selectedId: id })
  }

  getRenderComponent() {
    const { selectedKey, selectedId } = this.state

    switch (selectedKey) {
      case 'about':
        return <About />
      case 'blog':
        return <Blog id={selectedId} />
      case 'course':
        return <Course id={selectedId} />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  navigateTo = (path) => {
    window.history.pushState({}, '', `/${path}`)
    this.handlePathChange()
  }

  render() {
    const { selectedKey, scroll, isMobileMenu } = this.state
    return (
      <Fragment>
        <Header
          handleMobileMenu={this.handleMobileMenu}
          isMobileMenu={isMobileMenu}
          path={selectedKey}
          scroll={scroll}
        />
        <main className="main-area fix">
          {selectedKey !== 'home' && <Breadcrumb breadcrumbTitle={selectedKey} />}
          {this.getRenderComponent()}
        </main>
        <Footer />
        <BackToTop />
        <DataBg />
      </Fragment>
    )
  }
}
