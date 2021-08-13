import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ReactTwo from './components/react-two.jsx'

const App = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/'>
          <ReactTwo prop='react-two' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
