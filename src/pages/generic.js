import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <h2>come back soon!</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
