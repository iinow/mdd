import React from 'react'
import {Root, Login, Test, Edit} from './pages'
import './scss/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Root />
          </Route>
          <Route path="/edit">
            <DefaultLayout>
              <Edit/>
            </DefaultLayout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
