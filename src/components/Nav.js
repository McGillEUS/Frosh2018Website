import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import Link from 'gatsby-link'


const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'third'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">General Information</a>
                </Scroll>
            </li>
           

            <li>
                <Scroll type="id" element="second">
                    <a href="#">Sponsors</a>
                </Scroll>
            </li>

            <li>
                <Scroll type="id" element="third">
                    <a href="#">Map</a>
                </Scroll>
            </li>

           
        </Scrollspy>
    </nav>
)

export default Nav
