import React from 'react'
import { Link } from 'react-router-dom'

import './Onboarding.css'

class Onboarding extends React.Component {
  render() {
    return (
      <div>
      <main>
        <div class="onboarding-container">
             <h1>Habit Scheduler</h1>
             <p>A todo app, with a&nbsp;twist</p>
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

