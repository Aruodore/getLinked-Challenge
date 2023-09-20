import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import RegisterPage from './pages/RegisterPage'
import Root from './pages/Root'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        {index: true, element: <HomePage/>},
        { path: '/register', element: <RegisterPage/>},
        { path: '/contact', element: <ContactPage/>}
  ]},
  ])

  return (
   <RouterProvider router={router}/>
  )
}

export default App
