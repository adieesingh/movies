import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/' element={<Signup></Signup>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
