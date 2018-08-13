import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { replace } from "gatsby-link";
import { Footer } from "./Footer";
import Header from './Header'
import './index.css'

class Layout extends Component {

  constructor() {
    super()
    this.state = {
      windowWidth: (typeof window !== `undefined`) ? window.innerWidth : 1000,
      windowHeight: (typeof window !== `undefined`) ? window.innerHeight : 1000,
    }
  }

  componentDidMount() {
    this.updateDeminsions()
    window.addEventListener('resize', this.updateDeminsions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeminsions.bind(this))
  }

  updateDeminsions() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
  }

  componentDidUpdate() {
    const {pathname} = this.props.location
    if (pathname === '/') {
      replace('/about')
    }
  }

  render() {
    const { children, data, location } = this.props
    return (
      <div style={{padding: 20}}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header location={location} />
        <main style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 80 }}>
          <div
            style={{
              minHeight: this.state.windowHeight - 215, maxWidth: 800, width: '100%'
            }}
          >
            {children()}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
