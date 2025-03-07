import React from 'react'
import cs from 'classnames'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

import st from './style.scss'

export default class PageNotFound extends React.Component {
  static propTypes = {
    applicationModel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  gotoURL = (url, filterDetails) => {
    const { history } = this.props
    this.setState({
    })
    history.push(url)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col
              className={cs(st.pp_left_00)} lg={2} md={3} sm={3} xl={2}
              xs={12}>
              <div className={cs(st.main_logo)} onClick={() => this.gotoURL('/')}>
                <div className={cs(st.desktop)}>
                  <img alt="start" src={'https://www.resumaker.co.in/assets/images/logo.svg'} />
                </div>
                <div className={cs(st.mobile)}>
                  <img alt="start" src={'https://www.resumaker.co.in/assets/images/logo.svg'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row className={cs(st.mb_responsive)}>
            <Col className={cs(st.container)} sm={12}>
              <div className={cs(st.page_404)}>
                <div className={cs(st.subText)}>
                  <h2>The requested url was not found.</h2>
                </div>
                <div
                  className={cs(st.home_link)}
                  onClick={() => this.gotoURL('/')}>Go to home</div>
                <div className={cs(st.error_page)}>
                  <img alt="start" src={'../assets/images/404.png'} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
