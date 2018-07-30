import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderLeaders from '../components/HeaderLeaders'
import pic04 from '../assets/images/pic04.jpg'

class Leaders extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderLeaders />
        <div id="main">
          <section id="content" className="main">
            <h2>come back dfkjdfksjdfksjdfl!</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Leaders

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
