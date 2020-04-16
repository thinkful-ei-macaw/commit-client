import React from 'react'
import './DailyFocus.css'
import Nav from '../../components/Nav/Nav'
import DailyFocusHeader from '../../components/DailyFocusHeader/DailyFocusHeader'
import DailyFocusSession from '../../components/DailyFocusSession/DailyFocusSession'
import DailyBreaksSession from '../../components/DailyFocusBreaks/DailyFocusBreaks'
import DailyFocusStreak from '../../components/DailyFocusStreak/DailyFocusStreak'
import TodoList from '../../components/TodoList/TodoList'


export default class DailyFocus extends React.Component {
  render() {
    return (
      <div>
      <main>
        <Nav/>
        <DailyFocusHeader/>
      <section className="streak-section">
        <DailyFocusSession/>
        <DailyBreaksSession/>
        <DailyFocusStreak/>
      </section>
      <TodoList/>
    </main>
      </div>
    )
  }
}
