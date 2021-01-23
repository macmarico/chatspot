
import React from 'react'
import Join from './screens/Join'
import Home from './screens/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Route path='/' component={Join} exact/>
      <Route path='/home' component={Home} />
    </Router>
  )
}

export default App
