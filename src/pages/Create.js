import React, { Component } from 'react'
import { AuthContext } from '../providers/AuthContext'
import firebase from '../services/firebase'

export default class PostForm extends Component {
  static contextType = AuthContext
  
  state ={
    email: null,
    name: null,
    value: null
  }

  set = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const {currentUser} = this.context
    const {history} = this.props
    const { email, name, value} = this.state

    if (!value) return alert("Please write something: ")

    if(!currentUser) return history.push('/login')

    try {
      await firebase.database().ref(`posts/${Date.now()}`).set({
        name,
        email,
        text: value,
      })
      alert("Posted")
    } catch (error) {
      console.error(error);
      alert("Failed to post")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>Write your story here</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <input type="email" value={this.state.email} onChange={this.set('email')} placeholder="email"/>
            </div>
            <div className="form-control">
              <input type="text" value={this.state.name} onChange={this.set('name')} placeholder="name"/>
            </div>
            <div className="form-control">
              <textarea value={this.state.value} onChange={this.set('value')}/>
            </div>
            <div className="form-control">
              <input type="submit" value="Post"/>
            </div>
          </form>
        </header>
      </div>
    )
  }
}
