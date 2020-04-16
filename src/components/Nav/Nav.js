import React from 'react';
import "./Nav.css"
import {Link} from 'react-router-dom';

function navBar(props) {
  return (
    <header className="nav">
      <nav className="nav_navigation">
        <div> 
        </div>
        <Link to="/">
        <div className="nav_logo">Commit</div></Link>
        <div className="spacer"/>
        <div className="nav_items">
          <ul>
            <li><a href="/">Features</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
} 

export default navBar;