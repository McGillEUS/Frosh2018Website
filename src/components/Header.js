import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';
import froshed_final from '../assets/images/frosh.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={froshed_final} alt="" /></span>
    </header>
)

export default Header
