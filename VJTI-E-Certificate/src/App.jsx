import './App.css'
import Form from './components/Form';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
 
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <div className='w-100px'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/form' element={<Form />} />
            <Route exact path='/login' element={<Login />} />
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
