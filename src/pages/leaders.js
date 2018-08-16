import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderLeaders from '../components/HeaderLeaders'
import LeaderPage from '../components/LeaderPage'
import {Column, Row} from 'simple-flexbox';

class Leaders extends React.Component {
  render() {

    return (


      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderLeaders />
        <div id="main">
          <LeaderPage></LeaderPage>
        </div>

      </div>
    
        
          


          

        
      

    )
  }
}

export default Leaders

export const pageQuery = graphql`
  query LeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
