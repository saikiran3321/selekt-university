import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class BlogDetails extends Component {
  render() {
    const { post } = this.props
    return (
      <Fragment>
        {post && (
          <section className="blog-standard-area section-py-120">
            <Container>
              <Row>
                <Col lg={8}>
                  <div className="blog__standard-post blog__details-wrapper">
                    <div className="blog__standard-thumb">
                      <img alt="img" className="w-100" src={`/assets/images/blog/${post.img}`} />
                    </div>
                    <div className="blog__standard-content blog-details-content">
                      <h3 className="title">{post.title}</h3>
                      <ul className="list-wrap blog__post-meta">
                        <li><i className="flaticon-account" /> by {post.author}</li>
                        <li><i className="flaticon-calendar-date" /> {post.date}</li>
                        <li><i className="flaticon-help" /> 22 Comments</li>
                      </ul>
                      {post.details.sections.map((section) => {
                        if (!post.id) return null
                        const sectionKey = `${post.id}-${section.type}-${Math.random() * 10}-${Math.random() * 10}`
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
                                    <li key={`${sectionKey}-${listItem}`}><i className="fas fa-check-circle" /> {listItem}</li>
                                  ))}
                                </ul>
                              </div>
                            </Fragment>
                          )
                        }
                        return null
                      })}
                      <div className="blog-details-bottom">
                        <Row>
                          <Col md={7} xl={6}>
                            <div className="tg-post-tag">
                              <h5 className="tag-title">Tags :</h5>
                              <ul className="list-wrap p-0 mb-0">
                                {post.tags.map((tag) => (
                                  <li key={tag}><a alt={tag} href="/blog">{tag}</a></li>
                                ))}
                              </ul>
                            </div>
                          </Col>
                          <Col md={5} xl={6}>
                            <div className="tg-post-social justify-content-start justify-content-md-end">
                              <h5 className="social-title">Social Share :</h5>
                              <ul className="list-wrap p-0 mb-0">
                                <li><a alt="icons-facebook" href="/blog"><i className="fab fa-facebook-f" /></a></li>
                                <li><a alt="icons-twitter" href="/blog"><i className="fab fa-twitter" /></a></li>
                                <li><a alt="icons-linkedin" href="/blog"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a alt="icons-pinterest" href="/blog"><i className="fab fa-pinterest-p" /></a></li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <div className="blog__next-prev mb-50">
                    <Row>
                      <Col md={6}>
                        <div className="blog__prev-item">
                          <div className="blog__prev-thumb">
                            <a href="/blog">
                              <img alt="img" src="/assets/images/blog/blog_standard04.jpg" />
                            </a>
                          </div>
                          <div className="blog__prev-content">
                            <span className="caption">Previous Post</span>
                            <h5 className="title"><a href="/blog">
                              Future Plan Strategy for Construe Architecture</a></h5>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="blog__prev-item next">
                          <div className="blog__prev-thumb">
                            <a href="/blog">
                              <img alt="img" src="/assets/images/blog/blog_standard03.jpg" />
                            </a>
                          </div>
                          <div className="blog__prev-content">
                            <span className="caption">Next Post</span>
                            <h5 className="title"><a href="/blog">
                              The Growing Need For Effective Password</a></h5>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={4}>
                  <aside className="blog-sidebar">
                    <div className="blog__post-author">
                      <div className="d-block">
                        <div className="blog__post-author-thumb d-flex justify-content-center">
                          <a href="/blog"><img alt="img" src="/assets/images/blog/author.png" /></a>
                        </div>
                        <div className="blog__post-author-content">
                          <span className="designation">Written by</span>
                          <h5 className="name">Parker Willy</h5>
                          <p>Finanappreciate your trust greatly Our clients choose dentace ducts because kneer
                            areawe ow we are the best area Awaitingare really.</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-widget">
                      <h4 className="widget-title">Popular Tags</h4>
                      <div className="tagcloud">
                        <a href="/">Art  Design</a>
                        <a href="/">Courses</a>
                        <a href="/">App</a>
                        <a href="/">Learning</a>
                        <a href="/">UX Course</a>
                        <a href="/">Video</a>
                        <a href="/">Education</a>
                        <a href="/">Programming</a>
                      </div>
                    </div>
                  </aside>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </Fragment>
    )
  }
}
