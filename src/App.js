import React from 'react'
import { Switch, Route } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'

//pages
import Home from './pages/home'
axios.defaults.baseURL = 'https://vasiti-backend-api.herokuapp.com'

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Provider>
  )
}

export default App
