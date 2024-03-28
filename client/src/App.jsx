import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Adminlogin from './Components/Adminlogin'
import Studentlogin from './Components/Studentlogin'
import Studenthome from './Components/Studenthome'
import Adminhome from './Components/Adminhome'
import Welcomepg from './Components/Welcomepg'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Adminlogin' element={<Adminlogin />}></Route>
        <Route path='/Studentlogin' element={<Studentlogin />}></Route>
        <Route path='/Adminhome' element={<Adminhome />}></Route>
        <Route path='/Studenthome' element={<Studenthome />}></Route>
        <Route path='/Welcomepg' element={<Welcomepg />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
