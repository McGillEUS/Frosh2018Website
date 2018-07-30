import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import Link from 'gatsby-link'


const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">General Information</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Schedule</a>
                </Scroll>
            </li>
            <li>
            <Link to="leaders">Leaders & Coords</Link>
            </li>
            <li>
            <Link to="faq">FAQ</Link>
            </li>
            
        </Scrollspy>
    </nav>
)

export default Nav
