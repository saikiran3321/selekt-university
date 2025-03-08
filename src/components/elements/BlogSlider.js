import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import blogData from '../util/blog.json'

export default class BlogPost extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <Fragment>
        <Slider {...settings}>
          {blogData.map((item) => (
            <div key={item.id} className="m-3">
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
          ))}
        </Slider>
      </Fragment>
    )
  }
}
