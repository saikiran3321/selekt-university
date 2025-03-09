import React, { Component } from 'react'

export default class CourseCard extends Component {
  render() {
    const { item } = this.props
    return (
      <div className="courses__item-two shine__animate-item">
        <div className="courses__item-two-thumb">
          <a className="shine__animate-link" href={`/course/${item.id}`}>
            <img alt="img" src={`/assets/images/courses/${item.logo}`} />
          </a>
          <div className="author">
            <a href={`/course/${item.id}`}>
              <img alt="img" src="/assets/images/courses/course_author001.png" />
            </a>
          </div>
        </div>
        <div className="courses__item-two-content">
          <a className="courses__item-tag" href="/course" style={{ backgroundColor: item.color }}>
            {item.course.title}
          </a>
          <h5 className="title">
            <a href={`/course/${item.id}`}>{item.courseTitle}</a>
          </h5>
          <ul className="courses__item-meta list-wrap">
            <li><i className="flaticon-file" /> 05</li>
            <li><i className="flaticon-timer" /> {item.duration}</li>
            <li><i className="flaticon-user-1" /> {item.course.students}</li>
          </ul>
          <div className="courses__item-bottom">
            <div className="course__price">
              <h3 className="price">&#8377;{item.price}</h3>
            </div>
            <div className="courses__item-rating">
              <i className="fas fa-star" />
              <span className="rating-count">({item.course.rating})</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
