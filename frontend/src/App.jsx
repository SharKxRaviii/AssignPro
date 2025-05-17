import NavBar from './components/NavBar';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logo from './components/Logo';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <div>
        <NavBar/>
        <Logo/>
      </div>
  },

  {
    path: '/login',
    element: 
      <div>
        <NavBar/>
        <Login/>
      </div>
  },

  {
    path: '/signup',
    element: 
      <div>
        <NavBar/>
        <SignUp/>
      </div>
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
