import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import SignUp from './screens/SignUp'
import Martketplace from './screens/Marketplace'
import SignIn from './screens/SignIn'

const App = () => {

  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/signup" element={<SignUp />} ></Route>
            <Route exact path="/marketplace" element={<Martketplace />}></Route>
            <Route exact path='/signin' element={<SignIn />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
