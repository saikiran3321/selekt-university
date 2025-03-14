import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class CourseSingle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 1,
      isActive: {
        status: false,
        key: 1,
      },
    }
  }

  handleOnClick = (index) => {
    this.setState({ activeIndex: index })
  };

  handleToggle = (key) => {
    this.setState((prevState) => ({
      isActive: {
        key,
        status: prevState.isActive.key === key ? !prevState.isActive.status : true,
      },
    }))
  };

  render() {
    const { course } = this.props
    const { activeIndex } = this.state
    return (
      <div className="header-bg">
        <section className="courses__breadcrumb-area">
          <Container>
            <Row>
              <Col lg={8} xl={9}>
                <div className="courses__breadcrumb-content">
                  <a
                    className="category" href="/course"
                    style={{ backgroundColor: course.color }}>{course.course.title}</a>
                  <h3 className="title">{course.courseTitle}</h3>
                  <p>{course.syllabus.header}</p>
                  <ul className="courses__item-meta list-wrap">
                    <li>
                      <div className="author">
                        <a href="/course"><img alt="img" src="/assets/images/courses/course_author02.png" /></a>
                        <a href="/course">{course.instructor}</a>
                      </div>
                    </li>
                    <li><i className="flaticon-file" />{course.course.lessons}</li>
                    <li><i className="flaticon-timer" />{course.duration}</li>
                    <li><i className="flaticon-user-1" />{course.course.students}</li>
                    <li>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="rating-count">({course.course.rating})</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <section className="courses-details-area section-pb-120">
            <Row>
              <Col lg={8} xl={9}>
                <div className="courses__details-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <button className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} onClick={() => this.handleOnClick(1)} type="button">
                        Course Information</button>
                    </li>
                    <li className="nav-item">
                      <button className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} onClick={() => this.handleOnClick(2)} type="button">
                        Reviews</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className={`tab-pane ${activeIndex === 1 ? 'active' : ''}`}>
                      <div className="courses__details-content">
                        {course.info.map((infotext) => {
                          const infoid = Math.random() * 10
                          return <p key={infoid}>{infotext}</p>
                        })}
                        <div className="courses__details-inner">
                          {course.sections.section.map((section) => {
                            const sectionKey = `${section.type}-${Math.random() * 10}-${Math.random() * 10}`
                            if (section.type === 'normal') {
                              if (typeof section.text === 'string') {
                                return <p key={sectionKey}>{section.text}</p>
                              }

                              if (Array.isArray(section.text)) {
                                return section.text.map((listkey) => (
                                  <p key={`${sectionKey}-${Math.random()}`}>{listkey}</p>
                                ))
                              }

                              return null
                            }
                            if (section.type === 'heading') {
                              return <h4 key={sectionKey} className="inner-title">{section.text}</h4>
                            }
                            if (section.type === 'highlight') {
                              return <blockquote key={sectionKey}><p>“ {section.text} ”</p></blockquote>
                            }
                            if (section.type === 'list') {
                              return (
                                <Fragment key={sectionKey}>
                                  <p>{section.text}</p>
                                  <div className="event-details-list">
                                    <ul className="list-wrap">
                                      {section.list.map((listItem) => (
                                        <li key={`${sectionKey}-${listItem}`}><i className="fas fa-check-circle" /><p className="text">{listItem}</p></li>
                                      ))}
                                    </ul>
                                  </div>
                                </Fragment>
                              )
                            }
                            return null
                          })}
                        </div>
                      </div>
                      <div className="courses__details-curriculum">
                        <h4 className="title">Curriculum</h4>
                        <div className="accordion" id="accordionExample">
                          {course.sections.topics.map((topic) => (
                            <div key={topic.id} className="accordion-item">
                              <h2 className="accordion-header mb-0">
                                <button className={`accordion-button w-100 ${this.state.isActive.key === topic.id && this.state.isActive.status ? 'collapsed' : ''}`} onClick={() => this.handleToggle(topic.id)} style={{ textAlign: 'left' }} type="button">
                                  {topic.ttl}
                                </button>
                              </h2>
                              <div className={`accordion-collapse collapse ${this.state.isActive.key === topic.id && this.state.isActive.status ? 'show' : ''}`}>
                                <div className="accordion-body">
                                  <ul className="list-wrap">
                                    {topic.subtopic.map((sub_topic) => (
                                      <li key={sub_topic.id} className="course-item">
                                        <a className="course-item-link" href="/course">
                                          <span className="item-name">{sub_topic.title}</span>
                                          <div className="course-item-meta">
                                            <span className="item-meta duration">{sub_topic.duraction}</span>
                                            {sub_topic.lock === true ? (
                                              <span className="item-meta course-item-status">
                                                <img alt="icon" src="/assets/images/icons/lock.svg" />
                                              </span>
                                            )
                                              : null
                                            }
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="courses__details-instructors">
                        <h4 className="title">Your Instructors</h4>
                        <div className="courses__instructors-list">
                          <div className="courses__instructors-item">
                            <div className="courses__instructors-thumb">
                              <a href="/course">
                                <img alt="img" src="/assets/images/courses/details_instructors01.jpg" />
                              </a>
                            </div>
                            <div className="courses__instructors-content">
                              <h5 className="name">
                                <a href="/course">Robert Smith</a>
                              </h5>
                              <span className="designation">Graphic Design</span>
                              <ul className="meta list-wrap d-flex flex-wrap">
                                <li>
                                  <i className="flaticon-user-1" /> 1,135 Students
                                </li>
                                <li>
                                  <i className="flaticon-file" /> 05
                                </li>
                                <li>
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span className="average">(4.2)</span>
                                  </div>
                                </li>
                              </ul>
                              <p>Donald Logan has more than 15 years’ experience as a project management consultant,
                                educator, technology consultant, business know.</p>
                              <div className="tg-button-wrap">
                                <a className="btm btn-reset btn-border tg-svg" href="/course">
                                  <span className="text">See More</span>
                                  <img
                                    alt="btn-arrow" className="svg-icon" id="svg-btn1"
                                    src="/assets/images/icons/btn-arrow.svg" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="courses__instructors-item">
                            <div className="courses__instructors-thumb">
                              <a href="/course">
                                <img alt="img" src="/assets/images/courses/details_instructors02.jpg" />
                              </a>
                            </div>
                            <div className="courses__instructors-content">
                              <h5 className="name">
                                <a to="/course">Ketty Roagh</a>
                              </h5>
                              <span className="designation">Web Developer</span>
                              <ul className="meta list-wrap d-flex flex-wrap">
                                <li>
                                  <i className="flaticon-user-1" /> 1,435 Students
                                </li>
                                <li>
                                  <i className="flaticon-file" /> 05
                                </li>
                                <li>
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <span className="average">(4.2)</span>
                                  </div>
                                </li>
                              </ul>
                              <p>Donald Logan has more than 15 years’ experience as a project management consultant,
                                educator, technology consultant, business know.</p>
                              <div className="tg-button-wrap">
                                <a className="btm btn-reset btn-border tg-svg" href="/course">
                                  <span className="text">See More</span>
                                  <img
                                    alt="btn-arrow" className="svg-icon" id="svg-btn2"
                                    src="/assets/images/icons/btn-arrow.svg" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`tab-pane ${activeIndex === 2 ? 'active' : ''}`}>
                      <div className="courses__details-reviews">
                        <h4 className="title">Student Ratings & Reviews</h4>
                        <div className="course-rate">
                          <div className="course-rate__summary">
                            <div className="course-rate__summary-value">4.8</div>
                            <div className="course-rate__summary-stars">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="course-rate__summary-text">Total 2 Rating</div>
                          </div>
                          <div className="course-rate__details">
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                5
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div className="rating" style={{ width: '80%' }} title="80%" />
                                <span className="rating-count">2</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                4
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div className="rating" style={{ width: '50%' }} title="50%" />
                                <span className="rating-count">1</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                3
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                2
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                1
                                <i className="fas fa-star" />
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray" />
                                <div className="rating" style={{ width: '0%' }} title="0%" />
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="course-reviews">
                          <h4 className="course-review-head">Reviews (01)</h4>
                          <ul className="list-wrap">
                            <li>
                              <div className="review-author">
                                <img alt="img" src="/assets/images/blog/comment01.png" />
                              </div>
                              <div className="review-author-info">
                                <div className="review-stars-rated">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <h5 className="user-name">
                                  Admin <span className="date">August 5, 2023</span>
                                </h5>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="course-review-form">
                          <h4 className="course-review-head">Write a review</h4>
                          <Form action="#">
                            <Row>
                              <Col sm={6}>
                                <Form.Control placeholder="Your Name" type="text" />
                              </Col>
                              <Col sm={6}>
                                <Form.Control placeholder="Your Email" type="email" />
                              </Col>
                            </Row>
                            <Form.Control placeholder="Review Title" type="text" />
                            <div className="course-form-rating">
                              <span>Select Rating:</span>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <Form.Control as="textarea" placeholder="Type Comments" />
                            <button className="btm" type="button">Submit your Review</button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} xl={3}>
                <aside className="courses__details-sidebar">
                  <div className="event-widget">
                    <div className="thumb">
                      <img alt="img" src={`/assets/images/courses/${course.logo ? course.logo : 'course_thumb02.jpg'}`} />
                      <a alt="video" className="popup-video" href="/course"><i className="fas fa-play" /></a>
                    </div>
                    <div className="event-cost-wrap">
                      <h4 className="price"><strong>Costs:</strong>&#8377;{course.price}
                        {course.actual_price && <span>&#8377;{course.actual_price}</span>}</h4>
                      <a className="btn" href="/course">Enroll This Now</a>
                      <div className="event-information-wrap">
                        <h6 className="title">Include This Course</h6>
                        <ul className="list-wrap">
                          <li><i className="flaticon-timer" />Duration <span>{course.duration}</span></li>
                          <li><i className="flaticon-file" />Estimated Seat <span>250</span></li>
                          <li><i className="flaticon-user-1" />Joined <span>190</span></li>
                          <li><i className="flaticon-bars" />Laguage <span>
                            {course.language.charAt(0).toUpperCase() + course.language.slice(1)}</span></li>
                          <li><i className="flaticon-flash" />Category <span>
                            {course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span></li>
                          <li><i className="flaticon-share" />Share
                            <ul className="list-wrap event-social">
                              <li><a alt="facebook" href="/course"><i className="fab fa-facebook-f" /></a></li>
                              <li><a alt="twitter" href="/course"><i className="fab fa-twitter" /></a></li>
                              <li><a alt="instagram" href="/course"><i className="fab fa-instagram" /></a></li>
                              <li><a alt="youtube" href="/course"><i className="fab fa-youtube" /></a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blog-widget">
                    <h4 className="widget-title">Related Courses</h4>
                    <div className="rc-post-item">
                      <div className="rc-post-thumb">
                        <a href="/course">
                          <img alt="img" src="/assets/images/blog/blog_standard01.jpg" />
                        </a>
                      </div>
                      <div className="rc-post-content">
                        <h4 className="title"><a href="/course">Nastering Data ndamentals</a></h4>
                        <span className="price">&#8377;22.00</span>
                      </div>
                    </div>
                    <div className="rc-post-item">
                      <div className="rc-post-thumb">
                        <a href="/course">
                          <img alt="img" src="/assets/images/blog/blog_standard04.jpg" />
                        </a>
                      </div>
                      <div className="rc-post-content">
                        <h4 className="title"><a href="/course">Make Edition Magnificent</a></h4>
                        <span className="price"><del>$29.00</del> $18.00</span>
                      </div>
                    </div>
                    <div className="rc-post-item">
                      <div className="rc-post-thumb">
                        <a href="/course">
                          <img alt="img" src="/assets/images/blog/blog_standard03.jpg" />
                        </a>
                      </div>
                      <div className="rc-post-content">
                        <h4 className="title"><a href="/course">The Potentially Accessibility</a></h4>
                        <span className="price">$11.00</span>
                      </div>
                    </div>
                    <div className="rc-post-item">
                      <div className="rc-post-thumb">
                        <a href="/course">
                          <img alt="img" src="/assets/images/blog/blog_standard02.jpg" />
                        </a>
                      </div>
                      <div className="rc-post-content">
                        <h4 className="title"><a href="/course">Create quick is wire frames</a></h4>
                        <span className="price">$11.00</span>
                      </div>
                    </div>
                  </div>
                </aside>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    )
  }
}
