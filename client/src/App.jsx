import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import SignUp from './screens/SignUp'
import Martketplace from './screens/Marketplace'
import SignIn from './screens/SignIn'
import Groups from './screens/Groups'
import Profile from './screens/Profile'

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
            <Route exact path="/groups" element={<Groups />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
