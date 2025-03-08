import React, { Component } from 'react'

export default class Courses extends Component {
  render() {
    const { item } = this.props
    return (
      <div key={item.id}>
        <div className="blog__post-item shine__animate-item">
          <div className="blog__post-thumb">
            <a className="shine__animate-link" href={`/blog/${item.id}`}>
              <img alt="img" src={`/assets/images/blog/${item.img}`} style={{ height: '250px' }} />
            </a>
          </div>
          <div className="blog__post-content">
            <a className="cat" href="/">
              {item.category}
            </a>
            <h4 className="title">
              <a href={`/blog/${item.id}`}>{item.title}</a>
            </h4>
            <ul className="list-wrap blog__post-meta">
              <li>
                <i className="flaticon-account" /> by <a href="/">{item.author}</a>
              </li>
              <li>
                <i className="flaticon-calendar-date" /> {item.date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
