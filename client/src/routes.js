import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Destinos from './pages/Destinos'

const Routes = () => {
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Destinos} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes