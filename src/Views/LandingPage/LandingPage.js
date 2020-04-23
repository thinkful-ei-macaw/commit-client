import React from 'react';
import Nav from '../../components/Nav/Nav';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import CheckboxImage from '../../images/checkbox.svg';
import MobileDevice from '../../images/mobile-device.svg';
import TakeBreaks from '../../images/take-breaks.svg';
import HappyFeeling from '../../images/happy-feeling.svg'

class LandingPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    getStarted: false
  }
}

  render() {
    return (
     <>
       <Nav/>
       <main>
         <section className="landing_page">
           <div className="hero">
            <h1>Create healthier coding&nbsp;habits</h1>
            <img src={CheckboxImage} alt="woman on phone"></img>
            <div className="button_container">
             <Link to={'/login'}>
            <button>Get started</button>
             </Link>
            </div>
             </div>
             <div className="features_section_container">
            <div className="features_section">
            <h1>Focus on what&nbsp;matters</h1>
            <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).
            </p>
            <div className="image_container">
              <div>
                <img src={MobileDevice} alt="mobile devices"></img>
              </div>
            </div>
            </div>
            </div>
            
            <div className="features_section">
            <h1>Keep track of your breaks&nbsp;</h1>
            <p>Get reminded to take breaks after completing coding sessions. Taking breaks can boost productivity, spark creative ideas, and retain information.
            </p>
            <div className="image_container">
              <div>
                <img src={TakeBreaks} alt="woman taking a break"></img>
              </div>
            </div>
            </div>
            <div className="features_section">
            <h1>Stay motivated with&nbsp;streaks</h1>
            <p>Reward yourself with motivating streaks and check off tasks to level up your emoji!
            </p>
            <div className="image_container">
              <div>
                <img src={HappyFeeling} alt="happy woman walking"></img>
              </div>
            </div>
            </div>
           <Footer/>
         </section>
       </main>
     </>
    );
  }
}

export default LandingPage;