import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        
        <section>
            <h2>McGill EUS Frosh 2018</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>845 Sherbrooke St W  &bull; Montreal, QC &bull; H3A 0G4</dd>
                <dt>Phone</dt>
                <dd>(514) 398-4455</dd>
                <dt>Email</dt>
                <dd><a href="#">oweek.communications@mcgilleus.ca</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.facebook.com/EngineeringFrosh/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/EngineeringFrosh/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; McGill EUS 2018</p>
        <p className="copyright"> Made with ❤️ by suleman malik </p>
    </footer>
)

export default Footer
