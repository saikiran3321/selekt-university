import React, { Component } from 'react'
import blogData from '../../util/courses.json'
import List from './List'
import Details from './Details'

export default class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPost: null,
      notFound: false,
    }
  }

  componentDidMount() {
    this.findBlogPost()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.findBlogPost()
    }
  }

  findBlogPost = () => {
    const { id } = this.props
    if (id) {
      const blogPost = blogData.find((post) => post.id === Number(id))
      if (blogPost) {
        this.setState({ blogPost, notFound: false })
      }
      else {
        this.setState({ notFound: true })
      }
    }
    else {
      this.setState({ blogPost: null })
    }
  };

  render() {
    const { blogPost, notFound } = this.state

    if (notFound) {
      return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>🚫 Page Not Found</h2>
    }

    if (blogPost) {
      return <Details post={blogPost} />
    }

    return <List blogPosts={blogData} />
  }
}
