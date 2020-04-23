import React from 'react';
import LandingPage from '../Views/LandingPage/LandingPage';
import {BrowserRouter , Route} from 'react-router-dom';
import DailyFocus from '../Views/DailyFocus/DailyFocus';
import PrivateRoute from '../components/Util/PrivateRoute'
import LoginPage  from '../Views/Login/LoginPage'
import Onboarding from '../Views/Onboarding/Onboarding'
import './App.css'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
     <div className="App">
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/login" component={LoginPage}/>
       <PrivateRoute path='/get-started' component={Onboarding}/>
       <PrivateRoute path={'/daily-focus'} component={DailyFocus}/>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;