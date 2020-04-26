import React from 'react';
import './DailyFocus.css';
import TodoList from '../../components/TodoList/TodoList';
import TokenService from '../../services/token-service';
import {Link} from 'react-router-dom';


export default class DailyFocus extends React.Component {

/**Clears auth token after a user logs out. */

handleLogoutClick = () => {
  TokenService.clearAuthToken()
}

  render() {
    return (
      <div>
      <main>
        <Link to='/'>
          <button type="button" onClick={this.handleLogoutClick}>Log out</button>
        </Link>
      <TodoList/>
      
    </main>
      </div>
    )
  }
}
