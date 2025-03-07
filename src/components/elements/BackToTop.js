import React, { Component, Fragment } from 'react'

class BackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
    this.onScroll = this.onScroll.bind(this)
    this.handleScrollToTop = this.handleScrollToTop.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for instant scrolling
    })
  }

  onScroll() {
    if (window.scrollY > 100 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true })
    }
    else if (window.scrollY < 100 && this.state.hasScrolled) {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.hasScrolled && (
          <button
            aria-label="Scroll to top"
            className="scroll__top scroll-to-target open"
            onClick={this.handleScrollToTop}
            type="button"
          >
            <i className="tg-flaticon-arrowhead-up d-block" />
          </button>
        )}
      </Fragment>
    )
  }
}

export default BackToTop
