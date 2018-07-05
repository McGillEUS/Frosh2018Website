import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        
        <section>

            <h2>McGill EUS Frosh 2018</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>1234  &bull; Montreal, CA</dd>
                <dt>Phone</dt>
                <dd>(514)idk</dd>
                <dt>Email</dt>
                <dd><a href="#">oweek.communications@mcgilleus.ca</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-snapchat alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/EngineeringFrosh/" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/EngineeringFrosh/" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; McGill EUS 2018</p>
        <p className="copyright"> Made with love -  suleboii </p>
    </footer>
)

export default Footer
