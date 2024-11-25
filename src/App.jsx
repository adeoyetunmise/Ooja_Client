import './App.css'
import {Routes, Route} from "react-router-dom"
import RootLayout from './components/RootLayout'
import Hero from './pages/auth/Hero'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import Dashboard from './pages/main/Dashboard'
import UploadProduct from './components/UploadProduct'
import EditProduct from './components/EditProduct'



function App() {
  const {state: {user}} = useContext(AppContext)

  if(!user){
    
    return(
      <>
      <ToastContainer theme="colored" position='top-center'/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </>
    )
  }
  

  return (
    <>
    <ToastContainer theme="colored" position='top-center'/>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='uploadproduct' element={<UploadProduct/>}></Route>
        <Route path='editproduct' element={<EditProduct/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
