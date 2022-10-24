
import React from 'react'
import NavBar from './components/navbar'
import User from './views/users'

function App() {
 
  return (
    <React.Fragment>
        <NavBar/>
       <div className="mx-auto shadow border p-8 m-10">
      <h1 className="text-3xl font-bold">Random User App</h1>
      <User/>
      
    </div>
    </React.Fragment>
   
  )
}

export default App
