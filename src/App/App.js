import React from 'react';
import LandingPage from '../Views/LandingPage/LandingPage';
import LoginForm from '../Views/Signup/LoginForm'
import {BrowserRouter , Route} from 'react-router-dom';
import DailyFocus from '../Views/DailyFocus/DailyFocus';
import PrivateRoute from '../components/Util/PrivateRoute'

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
     <div className="App">
       <Route exact path="/" component={LandingPage}/>
       <Route exact path="/get-started" component={LoginForm}/>
       <PrivateRoute path={'/daily-focus'} component={DailyFocus}/>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;