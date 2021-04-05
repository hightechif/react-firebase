import React from 'react'

function Login() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Login</h1>
          <form onSubmit="">
            <div className="form-control">
              <input
                type="email"
                // onChange={this.set('email')}
                placeholder="Email"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                // onChange={this.set('password')}
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

export default Login
