import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Schedule from '../components/Schedule'
import pic01 from '../assets/images/pic01.jpg'
import Calendar from '../components/Calendar'

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
                  <h2>General info abt frosh</h2>
                </header>
                <p>Welcome to McGill Engineering! We here at the Engineering 
                  Undergraduate Society (EUS) would like to wish you a warm 
                  welcome to your next three or four (or more) years at McGill. 
                  The EUS is the student-run representative body of undergraduate 
                  students in the Faculty of Engineering. As an undergraduate engineer you 
                  are automatically a member of the EUS, so we’re excited to meet you! ...

                  **VIDEO**
                  </p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Link to generic page</Link></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="first" className="main special">
              <h2>Schedule</h2>

              <Schedule> </Schedule>

          
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Sponsors</h2>
              <p>sponsor info and text </p>
            </header>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Pics/faq or wtv</h2>
              <p>text</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">link to generic</Link></li>
                <li><Link to="/generic" className="button">Link to generic</Link></li>
              </ul>
            </footer>
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
