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
            <h2> <b> I’m new to the city/don’t really know anyone here? Should I still participate? </b></h2>
            <p>OF COURSE YOU SHOULD! Don’t be intimidated, your leaders, staff and coordinators who are all volunteer upper year students will be there for you to feel comfortable and safe all the time. We’re doing this for YOU, so we want you to be there!</p>

            <h2> <b> Do I have to be in the Faculty of Engineering to participate in Engineering Frosh?</b></h2>
            <p>Yes. The main goal for Frosh and Orientation Week is to introduce you to your faculty and to the people you will be spending most of your days with for the next four years, it is encouraged that everyone participates in their respective faculties’ froshes.</p>

            <h2> <b>Will there be drinks or food provided during Frosh? </b></h2>
            <p>OF COURSE YOU SHOULD! Don’t be intimidated, your leaders, staff and coordinators who are all volunteer upper year students will be there for you to feel comfortable and safe all the time. We’re doing this for YOU, so we want you to be there!</p>

            <h2> <b> I will be under 18 during Frosh, can I still participate?</b></h2>
            <p>OF COURSE YOU SHOULD! Don’t be intimidated, your leaders, staff and coordinators who are all volunteer upper year students will be there for you to feel comfortable and safe all the time. We’re doing this for YOU, so we want you to be there!</p>

            <h2> <b> I am having problem registering, what can I do?</b></h2>
            <p>OF COURSE YOU SHOULD! Don’t be intimidated, your leaders, staff and coordinators who are all volunteer upper year students will be there for you to feel comfortable and safe all the time. We’re doing this for YOU, so we want you to be there!</p>

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
