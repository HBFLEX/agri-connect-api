import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import SignUp from './screens/SignUp'
import Martketplace from './screens/Marketplace'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/signup" component={SignUp} ></Route>
            <Route exact path="/marketplace" component={Martketplace}></Route>
          </Switch>
      </Router>
    </>
  )
}

export default App
