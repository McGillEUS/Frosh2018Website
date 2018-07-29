import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'



class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>General Information</h2>
                </header>
                <p>
                Welcome to McGill Engineering! We here at the Engineering
                 Undergraduate Society (EUS) would like to wish you a warm 
                 welcome to your next three or four (or more) years at McGill. 
                 The EUS is the student-run representative body of undergraduate 
                 students in the Faculty of Engineering. As an undergraduate 
                 engineer you are automatically a member of the EUS, so we’re excited 
                 to meet you! Your first chance to get involved in the EUS will be at 
                 Engineering Frosh 2018 - Froshed Ashore. Frosh is the largest event of 
                 the Fall semester, with the overwhelming majority of the 800 new engineering 
                 students taking part. The week is jam packed with events (see the schedule below) 
                 and it’s where you’ll make many of your new friends at McGill.
                 The team of Engineering Frosh Coordinators, composed entirely of engineering 
                 students, has been working hard all summer to bring you the most exciting week 
                 possible. Check out our event trailer and our Facebook/Instagram pages below, 
                 and email us any time at oweek.communications@mcgilleus.ca. Stay tuned for the 
                 opening of registration in early August!
                </p>

                <p>Check out the trailer for <a href = "https://youtu.be/ZZYzRyheZG4"> Froshed Ashore </a> 😎 💯 </p>
                <ul className="actions">
                  <li><Link to="#" className="button special">Registration coming soon!</Link></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
              <h2>Schedule</h2>

              <Schedule> </Schedule>
          </section>

          <section id="first" className="main special">
              <h2>Sponsors</h2>

              <Sponsors></Sponsors>

          </section>

          <section id="first" className="main special">
              <h2>Map</h2>


          </section>


        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
