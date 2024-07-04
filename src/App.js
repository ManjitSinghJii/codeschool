import 'animate.css'
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Teachers from './components/Teachers'
import Holidays from './components/Holidays'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'



const App = ()=> {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/holidays" element={ <Holidays/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// ----------------------------use State Learn----------------------------------------------------------

// import {useState} from 'react'

// const App = ()=> {

  // const demo = ()=> {
  //   alert('mm')
  // }

  // const [show, setShow] = useState(true)
  
  // const hide = ()=> {
  //   setShow(!show)
  // }

//   return (
//     <div>
//       <h1 style={{
//         color: show ? 'blue' : 'red'
//       }}>Manjit Singh</h1>
//       {show && <p>Manjit Singh jii Ka</p>}
//       <button onClick={()=>{setShow(!show)}}>
//         {show ? 'Hide': 'Show'}
//         </button>
//     </div>
//   )
// }

// export default App