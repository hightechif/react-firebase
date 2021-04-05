import React, { Component } from 'react'
import firebase from '../services/firebase'
import { AuthContext } from '../providers/AuthContext'

class Home extends Component {
  static context = AuthContext

  handleLogout = () => {
    firebase.auth().signOut()
    alert("You're logged out!")
  }

  render() {
    const { currentUser } = this.context
    console.log(currentUser)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img className="App-logo" alt="logo"/> */}
          <p>Welcome to React</p>
          {/* Tombole Logout */}

          { !!currentUser && (
            <div>
              <button className="form-submit" onClick={this.handleLogout}>Logout</button>
            </div>
          )}
        </header>
      </div>
    )
  }
}

export default Home