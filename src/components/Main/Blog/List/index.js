import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import data from '../../../util/blog.json'
import BlogCard from './blogcard'
import Pagination from './pagination'

export default class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      limitPerPage: 6,
      pagination: [],
    }
  }

  componentDidMount() {
    this.createPagination()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.limitPerPage !== this.state.limitPerPage ||
      prevState.pagination.length !== this.state.pagination.length
    ) {
      this.createPagination()
    }
  }

  createPagination = () => {
    const pageCount = Math.ceil(data.length / this.state.limitPerPage)
    const paginationArray = new Array(pageCount).fill().map((_, idx) => idx + 1)
    this.setState({ pagination: paginationArray })
  };

  next = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
  };

  prev = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  };

  handleActive = (item) => {
    this.setState({ currentPage: item })
  };

  render() {
    const { currentPage, limitPerPage, pagination } = this.state
    const totalPages = Math.ceil(data.length / limitPerPage)
    const startIndex = (currentPage - 1) * limitPerPage
    const endIndex = startIndex + limitPerPage
    const paginatedProducts = data.slice(startIndex, endIndex)

    const paginationStart = Math.floor((currentPage - 1) / 4) * 4
    const paginationEnd = paginationStart + 4
    const paginationGroup = pagination.slice(paginationStart, paginationEnd)

    return (
      <section className="blog-grid-area section-py-120">
        <Container>
          <Row className="justify-content-center">
            {paginatedProducts.length === 0 && <h3>No Products Found</h3>}
            {paginatedProducts.map((item) => (
              <Col key={item.id} lg={4} md={6} sm={9}>
                <BlogCard item={item} />
              </Col>
            ))}
          </Row>
          <Pagination
            currentPage={currentPage}
            getPaginationGroup={paginationGroup}
            handleActive={this.handleActive}
            handlePageChange={this.handlePageChange}
            next={this.next}
            prev={this.prev}
            totalPages={totalPages}
        />
        </Container>
      </section>
    )
  }
}
