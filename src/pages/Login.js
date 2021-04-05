import React, { Component } from 'react'
import firebase from '../services/firebase'
import { AuthContext } from '../providers/AuthContext'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  static contextType = AuthContext 

  state = {}

  set = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleLogin = async event => {
    const { email, password } = this.state
    const { history } = this.props

    event.preventDefault()
    if (!email || !password) return alert('Please insert missing credentials!')

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push('/')
    }
    catch(err) {
      alert("Failed to login!")
      console.log(err)
    }
  }

  render() {
    const { currentUser } = this.context
    if (!!currentUser) return <Redirect to="/" />

    return (
      <div className="App">
        <header className="App-header">
          <h1>Login</h1>
          <form onSubmit={this.handleLogin}>
            <div className="form-control">
              <input
                type="email"
                onChange={this.set('email')}
                placeholder="Email"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                onChange={this.set('password')}
                placeholder="password"
              />
            </div>
            <div className="form-button">
              <input type="submit" value="Login" className="form-submit" />
            </div>
          </form>
        </header>
      </div>
    )
  }
}

export default withRouter(Login)
