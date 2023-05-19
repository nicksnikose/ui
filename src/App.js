import React from 'react'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import Index from './components/Index';
import GetData from './components/GetData'
import MaxTemp from './components/MaxTemp';
import MinTemp from './components/MinTemp';
import Search from './components/Search';


const App = () => {
  return (
    <div>
      <Header />
      <Routes> 
       
        <Route exact path='/index' element={ <Index />} />
        <Route exact path='/getdata' element={ <GetData />} />
        <Route exact path='/maxtemp' element={ <MaxTemp />} />
        <Route exact path='/mintemp' element={ <MinTemp />} />
        <Route exact path='/search' element={ <Search />} />
  
      </Routes>
       
    </div>
  )
}

export default App