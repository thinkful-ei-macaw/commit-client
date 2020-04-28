import React from 'react';
import './Signup.css';
import Nav from '../../components/Nav/Nav';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { Button, Input } from '../../components/Util/Utils';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: {
          value: '',
          touched: false
        },
        password: {
          value: '',
          touched: false
        }
      }
      this.handleSubmitJwtAuth = this.handleSubmitJwtAuth.bind(this);
    }

    state = {
      error: null
    }

    static defaultProps = {
      onLoginSuccess: () => {}
    }

    handleSubmitJwtAuth = event => {

      this.setState({
        error: null
      })

      event.preventDefault();

      const {
        user_name,
        password
      } = event.target

      /**  postLogin makes fetch call to server  */

      AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value
        })
        .then((res) => {
          user_name.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          this.props.onLoginSuccess()
        })
        .catch((res) => {
          this.setState({
            error: res.error
          })
        })
    }

render() {
    return(
      <div>
     <Nav/>
    <div className="login-page">
  <div className = "form-header"> Login Credentials: Username: Jordan, Password: 2544252 </div>
  <div className="form">
    <form onSubmit={this.handleSubmitJwtAuth}className="login-form">
      <Input required name="user_name" id="Login_username" placeholder="username"></Input>
      <Input required name="password" id="Login_password"placeholder="password" type="password"></Input>
     <Button className='submit'>Login</Button>
    </form>
  </div>
</div>

</div>
    )
  }
}

export default LoginForm;