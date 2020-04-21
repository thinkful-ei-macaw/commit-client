import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'

import './Onboarding.css'

class Onboarding extends React.Component {
  render() {
    return (
      <div>
      <Nav/>
      <main>
        <div class="container">
             <h1>Habit Scheduler</h1>
             <p> Let 's start your first two weeks of&nbsp;success!</p>
             <div class='image-container'>
               <img src="/Assets/online_calendar.png" alt="work" />
                 <p id="image-text-image"></p>
             </div>
             <div class='text-container'>
                 <p>Based on data from 10,000+ students, we recommend spending 10 hours/week in the classroom during your first 2 weeks to give yourself the best chance of success.</p>
             </div>
          <Link to="/daily-focus">
         <button id="start-plan">Create Habits</button>
         </Link>

        </div>
    </main>
      </div>
    )
  }
}

export default Onboarding 

