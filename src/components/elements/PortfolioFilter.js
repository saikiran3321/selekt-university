import React, { Component, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Isotope from 'isotope-layout'
import data from '../util/courses.json'

export default class PortfolioFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterKey: '*',
    }
    this.isotope = null
  }

  componentDidMount() {
    setTimeout(() => {
      this.isotope = new Isotope('.courses-active', {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
        },
      })
    }, 500)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.isotope && prevState.filterKey !== this.state.filterKey) {
      this.isotope.arrange({ filter: this.state.filterKey === '*' ? '*' : `.${this.state.filterKey}` })
    }
  }

  handleFilterKeyChange = (key) => {
    this.setState({ filterKey: key })
  };

  activeBtn = (value) => (value === this.state.filterKey ? 'active' : '');

  getUniqueCategories = () => {
    const categories = [...new Set(data.map((item) => item.category))]
    return categories.map((category) => ({
      name: category,
      class: category.toLowerCase().replace(/\s+/g, '-'),
    }))
  };

  render() {
    const categories = this.getUniqueCategories()
    const stars = Array.from({ length: 5 }, (_, i) => ({ id: `star-${i}` }))

    return (
      <Fragment>
        <div className="section__title-wrap">
          <Row className="align-items-end">
            <Col lg={6}>
              <div className="section__title text-lg-start">
                <span className="sub-title">10,000+ Unique Online Courses</span>
                <h2 className="title tg-svg">Our <span className="position-relative">
                  <span className="svg-icon" id="svg-4" /> Featured
                </span> Courses</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="courses__nav-active">
                <button className={this.activeBtn('*')} onClick={() => this.handleFilterKeyChange('*')} type="button">
                  All Courses <span>New</span>
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.class}
                    className={this.activeBtn(cat.class)}
                    onClick={() => this.handleFilterKeyChange(cat.class)}
                    type="button">
                    {cat.name}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <Row className="courses-active row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
          {data.map((item, i) => (
            <Col key={item.id} className={`col grid-item ${item.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="courses__item shine__animate-item">
                <div className="courses__item-thumb">
                  <a className="courses__item-tag" href="/" style={{ backgroundColor: item.color }}>{item.category}</a>
                  <a className="shine__animate-link" href={`/course/${item.id}`}>
                    <img alt="img" src={`/assets/images/courses/${item.logo}`} />
                  </a>
                </div>
                <div className="courses__item-content">
                  <ul className="courses__item-meta list-wrap">
                    <li><i className="flaticon-file" /> {item.lessons} Lessons</li>
                    <li><i className="flaticon-timer" /> {item.duration}</li>
                    <li><i className="flaticon-user-1" /> Students</li>
                  </ul>
                  <h5 className="title"><a href={`/course/${item.id}`}>{item.courseTitle}</a></h5>
                  <div className="courses__item-rating">
                    {stars.map((star) => (
                      <i key={star.id} className="fas fa-star" />
                    ))}
                    <span className="rating-count">({item.reviews})</span>
                  </div>
                  <div className="courses__item-bottom">
                    <div className="author">
                      <a href="/instructor-details"><img alt="img" src="/assets/images/courses/course_author.png" /></a>
                      <a href="/instructor-details">{item.instructor}</a>
                    </div>
                    <h5 className="price">${item.price}</h5>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Fragment>
    )
  }
}
