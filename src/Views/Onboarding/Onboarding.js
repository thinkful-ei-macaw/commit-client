import React from 'react'
import { Link } from 'react-router-dom'
import OnboardingImage from '../../images/onboarding.svg'

import './Onboarding.css'

class Onboarding extends React.Component {
  render() {
    return (
      <div className="onboarding-parent-container">
      <main>
        <div class="onboarding-container">
             <h1>Habit Scheduler</h1>
             <p>A todo app, with a&nbsp;twist. Get rewarded by completing coding sessions and by taking breaks.</p>
             <div class='image-container'>
               <img src={OnboardingImage} alt="work" />
             </div>
           <div className="button-start-container">
          <Link to="/daily-focus">
         <button className="button-start">Create Tasks</button>
         </Link>
        </div>
        </div>
    </main>
      </div>
    )
  }
}

export default Onboarding 

