import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/Home/About.jsx'
import Contact from './components/Home/Contact.jsx'
import User from './components/Home/User.jsx'
import Github from './components/Home/Github.jsx'

// let router = createBrowserRouter([
// {
//   path:'/',
//   element: <Layout/>,
//   children:[
//     {
//       path:'',
//       element: <Home/>
//     }
//     ,{
//       path:'/about',
//       element:<About/>
//     }
//     ,{
//       path:'/contact',
//       element:<Contact/>
//     }
//     ,{
//       path:'/github',
//       element:<Github/>
//     }
//   ]
// }

// ]);


  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user/:id' element={<User />}/>
        <Route path='/github' element={<Github />}/>


      </Route>
    )
  );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
