import React, { Component, createRef } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.countRef = createRef()
    this.increment = this.props.duration
      ? this.props.end / this.props.duration
      : 1
    this.interval = null
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.startCount()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (this.countRef.current) {
      observer.observe(this.countRef.current)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startCount = () => {
    this.setState({ count: 0 }, () => {
      this.interval = setInterval(() => {
        this.setState((prevState) => {
          const newCount = prevState.count + this.increment
          if (newCount >= this.props.end) {
            clearInterval(this.interval)
            return { count: this.props.end }
          }
          return { count: newCount }
        })
      }, 1000 / this.props.duration)
    })
  };

  render() {
    return (
      <span ref={this.countRef}>
        <span>{Math.round(this.state.count)}</span>
      </span>
    )
  }
}
