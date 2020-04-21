import React from 'react'
import './DailyFocus.css'
import Nav from '../../components/Nav/Nav'
import DailyFocusHeader from '../../components/DailyFocusHeader/DailyFocusHeader'
import DailyFocusSession from '../../components/DailyFocusSession/DailyFocusSession'
import DailyBreaksSession from '../../components/DailyFocusBreaks/DailyFocusBreaks'
import DailyFocusStreak from '../../components/DailyFocusStreak/DailyFocusStreak'
import TodoList from '../../components/TodoList/TodoList'
import TokenService from '../../services/token-service'
import {Link} from 'react-router-dom'


export default class DailyFocus extends React.Component {

handleLogoutClick = () => {
  TokenService.clearAuthToken()
}



  render() {
    return (
      <div>
      <main>
        <Nav/>
        
        <DailyFocusHeader/>
      <section className="streak-section">
        <DailyFocusSession/>
        <Link to='/'>
          <button type="button" onClick={this.handleLogoutClick}>Log out</button>
        </Link>
        <DailyBreaksSession/>
        <DailyFocusStreak/>
      </section>
      <TodoList/>
    </main>
      </div>
    )
  }
}
