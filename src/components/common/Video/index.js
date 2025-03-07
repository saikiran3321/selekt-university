/* eslint-disable max-len */
import React, { Component, Fragment } from 'react'
import cs from 'classnames'
import { get, map } from 'lodash'
import { Row, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { VIDEO } from '../../../constants'
import st from '../../Help/style.scss'

export default class Video extends Component {
static propTypes = {
  section: PropTypes.func.isRequired,
}

constructor(props) {
  super(props)
  this.state = {
    show: false,
    videoUrl: '',
    videoTitle: '',
  }
}

handleClose = () => {
  this.setState({
    show: false,
  })
}

handleShow = () => {
  this.setState({
    show: true,
  })
}

  updateVideoUrl = (url, title) => {
    this.setState({
      videoUrl: url,
      videoTitle: title,
    })
  }

  render() {
    const { section } = this.props
    const { show, videoUrl, videoTitle } = this.state
    const videoPrefix = 'https://www.youtube.com/embed/'
    return (
      <Fragment>
        <div className={cs(st.video_image)} onClick={this.handleShow}>
          <h4>How to video tutorials</h4>
          {map(VIDEO, (value, key) => (
            <div>
              {get(value, 'section') === section && (
              <p><div
                onClick={() => this.updateVideoUrl(videoPrefix.concat(get(value, 'id')), get(value, 'title'))}>
                {get(value, 'title')}</div>
              </p>
              )}
            </div>
          ))}
        </div>
        <Modal
          className={cs(st.home_model_popup)}
          onHide={this.handleClose}
          show={show}
          size="md"
				>
          <Modal.Header className={cs(st.crop_header)} closeButton>
            <Modal.Title className={cs(st.home_video_content_title)}>
              {videoTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={cs(st.crop_body)}>
            <Row>
              {/* Height and width should be responsive, so we control from css with this div - create one. */}
              <iframe
                className={cs(st.video_box)}
                height="300"
                src={videoUrl}
                title="Why most users like Resumaker?"
                width="600"
							/>
            </Row>
          </Modal.Body>
        </Modal>
      </Fragment>
    )
  }
}
