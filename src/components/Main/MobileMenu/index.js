import React, { Component, Fragment } from 'react'

export default class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: {
        status: false,
        key: '',
      },
    }
  }

  handleToggle = (key) => {
    const { isActive } = this.state
    if (isActive.key === key) {
      this.setState({
        isActive: {
          status: false,
        },
      })
    }
    else {
      this.setState({
        isActive: {
          status: true,
          key,
        },
      })
    }
  };

  render() {
    const { path } = this.props
    return (
      <Fragment>
        <ul className="navigation">
          <li className={`header-btn ${path === 'home' ? 'active' : ''}`}><a href="/">Home</a></li>
          <li className={`header-btn ${path === 'course' ? 'active' : ''}`}><a href="/course">Courses</a></li>
          <li className={`header-btn ${path === 'about' ? 'active' : ''}`}><a href="/about">About Us</a></li>
          <li className={`header-btn ${path === 'blog' ? 'active' : ''}`}><a href="/blog">Blog</a></li>
          <li className={`header-btn ${path === 'contact' ? 'active' : ''}`}><a href="/contact">Contact</a></li>
        </ul>
      </Fragment>
    )
  }
}
