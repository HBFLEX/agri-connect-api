import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Navbar from './components/Navbar'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
