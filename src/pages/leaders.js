import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import LeaderPage from '../components/LeaderPage'

import HeaderLeaders from '../components/HeaderLeaders'
import leader from '../assets/images/leaders/one.png';
import {Column, Row} from 'simple-flexbox';

class Leaders extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderLeaders />
        <div id="main">
          <section id="content" className="main">
            <LeaderPage></LeaderPage>
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