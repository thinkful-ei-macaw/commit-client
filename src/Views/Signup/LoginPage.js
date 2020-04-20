import React, { Component } from 'react'
import LoginForm from '../../Views/Signup/LoginForm'
import { Section } from '../../components/Util/Utils'

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/daily-focus'
        history.push(destination)
    }
    render() {
        return (
            <Section className='LoginPage'>
                <h2>Login</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </Section>
        )
    }
}