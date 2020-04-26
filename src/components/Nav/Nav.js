import React from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';

function navBar(props) {
  return (
    <header className="nav">
      <nav className="nav_navigation">
        <Link className="nav_logo" to="/">
       Commit
       </Link>
        <div className="spacer"/>
        <div className="nav_items">
          <ul>
            <li><a href="/">Features</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
} 

export default navBar;