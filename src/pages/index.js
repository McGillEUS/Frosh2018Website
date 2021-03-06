import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import ScheduleImg from '../assets/images/themedschedule.jpg'



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
                <p id = "text">
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
                 and email us any time at oweek.communications@mcgilleus.ca.
                </p>
                <div id="btn">
                  <ul className="actions">
                    <li><Link to="leaders" className="button special">Coords & Leaders</Link></li>
                  </ul>
                </div>

              <div id="btn">
                <ul className="actions">
                  <li><Link to="faq" className="button special">Frequently Asked Questions</Link></li>
                </ul>
              </div>

               <div id="btn">
                <ul className="actions">
                  <li><Link to="resources" className="button special">Resources</Link></li>
                </ul>
              </div>

               <div id="btn">
                <ul className="actions">
                  <li><a href="http://oweek.mcgilleus.ca/bursary.pdf" className="button special">Bursary Application</a></li>
                </ul>
              </div>

               <div id="btn">
                <ul className="actions">
                  <li><a href="http://www.mcgill.ca/firstyear/mcgilloweek/" className="button special">Register now!</a></li>
                </ul>
              </div>
              <div className = "responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZZYzRyheZG4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>


              </div>
            </div>
          </section>

          <section id="second" className="main special">
              <h2>Schedule</h2>
              <div id="max-width-schedule">
              <img src={ScheduleImg} style={{  }} alt=""></img>
              </div>

          </section>

          <section id="second" className="main special">
              <h2>Sponsors</h2>

              <Sponsors></Sponsors>

          </section>

          <section id="third" className="main special">
              <h2>Map</h2>
              <div className = "responsive">
                <iframe  src="https://www.google.com/maps/d/embed?mid=1RaEaAYk3DDxatIi5vHlH-9npIWr95XNi" width="640" height="480"></iframe>
              </div>
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
