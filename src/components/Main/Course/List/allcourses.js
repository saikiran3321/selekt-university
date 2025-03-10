import React, { Component, Fragment } from 'react'
import { Row, Col, Dropdown } from 'react-bootstrap'
import CourseCard from './card'
import jobs from '../../../util/courses.json'

export default class AllCourses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseList: jobs,
      courseSort: {
        sort: '',
        perPage: { start: 0, end: 0 },
      },
      filters: {
        category: [],
        instructor: [],
        price: [],
        language: [],
        difficulty: [],
      },
      filtername: {
        category: 'Filter by Category',
        price: 'Price Type',
        instructor: 'Instructors',
        language: 'Languages',
        difficulty: 'Difficulty Level',
      },
      allFilters: {
        category: [],
        price: [],
        instructor: [],
        language: [],
        difficulty: [],
      },
    }
  }

  componentDidMount() {
    this.beforeMount(this.state.courseList)
  }

  handleSortChange = (sortValue) => {
    this.setState((prevState) => ({
      courseSort: { ...prevState.courseSort, sort: sortValue },
    }))
  };

  handlePerPageChange = (perPageValue) => {
    const pageData = JSON.parse(perPageValue)
    this.setState((prevState) => ({
      courseSort: { ...prevState.courseSort, perPage: pageData },
    }))
  };

  handleFilterChange = (filterType, value) => {
    this.setState((prevState) => {
      const filters = { ...prevState.filters }
      if (filters[filterType].includes(value)) {
        filters[filterType] = filters[filterType].filter((item) => item !== value)
      }
      else {
        filters[filterType].push(value)
      }
      return { filters }
    })
  };

  clearAll = () => {
    this.setState({
      filters: {
        category: [],
        instructor: [],
        price: [],
        language: [],
        difficulty: [],
      },
      courseSort: {
        sort: '',
        perPage: { start: 0, end: 0 },
      },
    })
  };

  getSortLabel = () => {
    const { sort } = this.state.courseSort
    if (sort === 'asc') return 'Newest'
    if (sort === 'des') return 'Oldest'
    return 'Sort by (default)'
  };

  filterCourses = (course) => {
    const { filters } = this.state

    const matchesCategory =
      filters.category.length === 0 ||
      filters.category.includes(course.category.replace(/\s/g, '').toLowerCase())

    const matchesInstructor =
      filters.instructor.length === 0 ||
      filters.instructor.includes(course.instructor.replace(/\s/g, '').toLowerCase())

    const price = course.price === 0 ? 'free' : 'premium'
    const matchesPrice =
      filters.price.length === 0 ||
      filters.price.includes(price)

    const matchesLanguage =
      filters.language.length === 0 ||
      filters.language.includes(course.language.replace(/\s/g, '').toLowerCase())

    const matchesDifficulty =
      filters.difficulty.length === 0 ||
      filters.difficulty.includes(course.difficulty.replace(/\s/g, '').toLowerCase())

    return matchesCategory && matchesInstructor && matchesPrice && matchesLanguage && matchesDifficulty
  };

  sortCourses = (a, b) => {
    const { sort } = this.state.courseSort
    if (sort === 'des') return b.id - a.id
    if (sort === 'asc') return a.id - b.id
    return 0
  };

  beforeMount(JobList) {
    const { category, price, instructor, language, difficulty } = { ...this.state.allFilters }
    JobList.forEach((list) => {
      if (!category.some((cat) => cat.value === list.category.toString().toLowerCase())) {
        category.push({
          id: category.length + 1,
          name: list.category,
          value: list.category.toString().toLowerCase(),
        })
      }

      const dataPrice = list.price === 0 ? 'Free' : 'Premium'

      if (!price.some((pr) => pr.value === dataPrice.toString().toLowerCase())) {
        price.push({
          id: price.length + 1,
          name: list.price <= 0 ? 'Free' : 'Premium',
          value: dataPrice.toString().toLowerCase(),
        })
      }

      if (!instructor.some((inst) => inst.value === list.instructor.toLowerCase().replace(/ /g, ''))) {
        instructor.push({
          id: instructor.length + 1,
          name: list.instructor,
          value: list.instructor.toLowerCase().replace(/ /g, ''),
        })
      }

      if (!language.some((lang) => lang.value === list.language.toLowerCase())) {
        language.push({
          id: language.length + 1,
          name: list.language.charAt(0).toUpperCase() + list.language.slice(1),
          value: list.language.toLowerCase(),
        })
      }

      if (!difficulty.some((diff) => diff.value === list.difficulty.toLowerCase())) {
        difficulty.push({
          id: difficulty.length + 1,
          name: list.difficulty.charAt(0).toUpperCase() + list.difficulty.slice(1),
          value: list.difficulty.toLowerCase(),
        })
      }
    })

    this.setState({
      allFilters: {
        category,
        price,
        instructor,
        language,
        difficulty,
      },
    })
  }

  render() {
    const { courseList, courseSort, filters, allFilters, filtername } = this.state
    const { sort, perPage } = courseSort

    const filteredCourses = courseList
      .filter(this.filterCourses)
      .sort(this.sortCourses)
      .slice(perPage.start, perPage.end || 12)

    return (
      <Fragment>
        <Row>
          <Col className="order-2 order-lg-0" lg={4} xl={3}>
            <aside className="courses__sidebar">
              {Object.keys(allFilters).map((filterType) => (
                <div key={filterType} className="shop-widget">
                  <h4 className="widget-title">{filtername[filterType]}</h4>
                  <div className="shop-cat-list">
                    <ul className="list-wrap">
                      {allFilters[filterType].map((newfilter) => (
                        <li key={newfilter.id}>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                key={newfilter.id}
                                checked={filters[filterType].includes(newfilter.value)}
                                label={newfilter.name}
                                onChange={() => this.handleFilterChange(filterType, newfilter.value)}
                                type="checkbox" />
                              &nbsp;{newfilter.name}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </aside>
          </Col>
          <Col lg={8} xl={9}>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active">
                <div className="shop-top-wrap courses-top-wrap">
                  <Row className="align-items-center">
                    <Col md={5}>
                      <div className="shop-top-left">
                        <p>We found {filteredCourses.length} courses for you</p>
                      </div>
                    </Col>
                    <Col md={7}>
                      <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                        {(Object.values(filters).some((arr) => arr.length > 0) ||
                          sort !== '' ||
                          perPage.start !== 0 ||
                          perPage.end !== 0) && (
                          <button className="btm btn-reset text-nowrap me-2" onClick={this.clearAll} type="button">
                            Reset
                          </button>
                        )}
                        <Dropdown className="dropdown-top-right" onSelect={this.handleSortChange}>
                          <Dropdown.Toggle id="dropdown-basic">
                            {this.getSortLabel()}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="">Sort by (default)</Dropdown.Item>
                            <Dropdown.Item eventKey="asc">Newest</Dropdown.Item>
                            <Dropdown.Item eventKey="des">Oldest</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="ml-2" onSelect={this.handlePerPageChange}>
                          <Dropdown.Toggle className="border" id="dropdown-basic" variant="light">
                            {perPage.end === 0 ? 'All' : `${perPage.end} per page`}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item eventKey={JSON.stringify({ start: 0, end: 0 })}>All</Dropdown.Item>
                            <Dropdown.Item eventKey={JSON.stringify({ start: 0, end: 10 })}>10 per page</Dropdown.Item>
                            <Dropdown.Item eventKey={JSON.stringify({ start: 0, end: 20 })}>20 per page</Dropdown.Item>
                            <Dropdown.Item eventKey={JSON.stringify({ start: 0, end: 30 })}>30 per page</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row className="courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                  {filteredCourses.map((item) => (
                    <div key={item.id} className="col">
                      <CourseCard item={item} />
                    </div>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
