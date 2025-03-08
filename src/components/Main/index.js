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

constructor(props){
  super(props)
  this.state = {
    scroll: 0,
    isMobileMenu: false,
    selectedKey: this.getPathKey(),
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
  return window.location.pathname.replace('/', '') || 'home'
}

handlePathChange = () => {
  this.setState({ selectedKey: this.getPathKey() })
}

getRenderComponent() {
  const { selectedKey } = this.state
  switch (selectedKey) {
    case 'about':
      return <About />
    case 'blog':
      return <Blog />
    case 'course':
      return <Course />
    case 'contact':
      return <Contact />
    default:
      return <Home />
  }
}

navigateTo = (path) => {
  window.history.pushState({}, '', `/${path}`)
  this.setState({ selectedKey: path })
}

  updateSelectedKey = (selectedKey) => {
    this.setState({
      selectedKey,
    })
  }

  render(){
    const { selectedKey, scroll, isMobileMenu } = this.state
    return (
      <Fragment>
        <Header
          handleMobileMenu={this.handleMobileMenu}
          isMobileMenu={isMobileMenu}
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
