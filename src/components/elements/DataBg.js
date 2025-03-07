import { Component } from 'react'

export default class DataBg extends Component {
  componentDidMount() {
    const elementsBg = document.querySelectorAll('[data-background]')
    elementsBg.forEach((el) => {
      const element = el
      element.style.backgroundImage = `url(${element.getAttribute('data-background')})`
    })

    const elementsColor = document.querySelectorAll('[data-bg-color]')
    elementsColor.forEach((el) => {
      const element = el
      element.style.backgroundColor = element.getAttribute('data-bg-color')
    })
  }

  render() {
    return null
  }
}
