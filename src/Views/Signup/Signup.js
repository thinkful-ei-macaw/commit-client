import React from 'react'
import './Signup.css'
import Nav from '../../components/Nav/Nav'
import ValidationError from '../../components/ValidationError/ValidationError'
import AuthApiService from '../../services/auth-api-service'
// import {Link} from 'react-router-dom'
// import TokenService from '../../services/token-service'

class Signup extends React.Component {
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
this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = event => {
    console.log('Hi')
    event.preventDefault();
    this.setState({error:null})
    
    AuthApiService.postUser(this.state.name.value, this.state.password.value)
    .then(user => {
      
    })
    .catch( (e) => {
        alert('failed to sign up')
        console.log(e)
    })
   
 
}


updateName(name) {
    
    this.setState({name: {value: name, touched: true}})
    
}

updatePassword(password) {
    this.setState({password: {value: password, touched: true}})
}

validateName(){
    const name = this.state.name.value.trim();
    if(name.length === 0) {
        return 'Name must be at least 3 characters long'
    } else if (name.length < 3) {
        return 'Name must be at least 3 characters long';
    }
}
validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
        return 'Password is required '
    } else if (password.length < 6 || password.length > 72) {
         return 'Password must be between 6 and 72 characters'
    } else if (!password.match(/[0-9]/)) {
        return 'Password must contain at least one number';
    }
}   
  render() {
    return(
      <div>
     <Nav/>
    <div className="sign-up-header">
        <h1>Commit</h1>
    </div>
    <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-content">
                <input onChange={e=>this.updateName(e.target.value)} id="user_name" name="user_name" placeholder="user name" type="text"/>
                {this.state.name.touched && <ValidationError message={this.validateName()}/>}
                <input onChange={e=>this.updatePassword(e.target.value)}  id="password" name="password" placeholder="password" type="password"/><br />
                {this.state.password.touched && <ValidationError message={this.validatePassword()}/>}
                {/* <Link to={'/daily-focus'}> */}
                <div className="button">
                   <input value={'Get started'}type="submit"/>
                </div>
                {/* </Link> */} }
                <br />
            </div>
        </form>
    </div>
</div>
    )
  }
}

export default Signup