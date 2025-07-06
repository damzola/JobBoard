import {Routes, Route} from 'react-router-dom'
import Home from './module/Home'
import Navbar from './navigate/Navbar'
function App() {

  return (
    <>
    <div className=' container'>
  
      <Routes>
        <Route path='/' element="Home"/>
      </Routes>
      
     </div>
    </>
  )
}

export default App
