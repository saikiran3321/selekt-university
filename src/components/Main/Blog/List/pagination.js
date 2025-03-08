import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const { prev, currentPage, getPaginationGroup, next, pages, handleActive } = this.props

    return (
      <nav aria-label="Pagination" className="pagination__wrap mt-40">
        <ul className="list-wrap">
          {getPaginationGroup.length > 0 && currentPage > 1 && (
            <li className="page-item">
              <button aria-label="Previous Page" className="btm" onClick={prev} type="button" variant="link">
                <i className="fa fa-arrow-left" />
              </button>
            </li>
          )}

          {getPaginationGroup.map((item) => (
            <li key={item} className={`page-item ${currentPage === item ? 'active' : ''}`}>
              <button aria-label={`Page ${item}`} className="btm" onClick={() => handleActive(item)} type="button" variant="link">
                {item}
              </button>
            </li>
          ))}

          {getPaginationGroup.length > 0 && currentPage < pages && (
            <li className="page-item">
              <button aria-label="Next Page" className="btm" onClick={next} type="button" variant="link">
                <i className="fa fa-arrow-right" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}
