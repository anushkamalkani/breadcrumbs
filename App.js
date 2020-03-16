import React from 'react';
import {BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Jobs from './pages/jobs'
import CompanyA from './pages/company1'
import Forms from './pages/forms'
import Candidates from './pages/candidates'
import Main from './Main'

const App = () => (
  <div className='app'>
    
    <BrowserRouter component = {Main}>
    <Main />
      <Home path='/'/>
      <Jobs path='/jobs'/>
      <CompanyA path='/company1'/>
      <Forms path='/forms'/>
      <Candidates path='/candidates'/>
    </BrowserRouter>
  </div>
)

export default App
