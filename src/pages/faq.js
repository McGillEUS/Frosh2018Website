import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderFaq from '../components/HeaderFaq'
import pic04 from '../assets/images/pic04.jpg'

class Faq extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderFaq />
        <div id="main">
          <section id="content" className="main">
            <h2>come back dfkjdfksjdf23124324214ksjdfl!</h2>
          </section>
        </div>

      </div>
    )
  }
}

export default Faq

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
