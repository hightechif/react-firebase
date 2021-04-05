import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router