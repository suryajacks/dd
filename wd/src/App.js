import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Login from './Login'
import Form from './Form'
import Contact from './Contact'
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom'
const App = () => {
    return (
        <div>
      
            <Navbar/>
      
      <Routes>
      <Route path='/Home' elemeLoginnt={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Services' element={<Services/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Form' element={<Form/>} />

    
      </Routes>
      
        </div>
    )
}

export default App