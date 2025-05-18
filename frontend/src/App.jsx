import NavBar from './components/NavBar';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logo from './components/Logo';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar/>
        <Logo/>
      </div>
      )
  },

  {
    path: '/login',
    element:( 
      <div>
        <NavBar/>
        <Login/>
      </div>
      )
  },

  {
    path: '/signup',
    element:( 
      <div>
        <NavBar/>
        <SignUp/>
      </div>
      )
  },
]);

function App() {

  useEffect(() => {
    const connectToBackend = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        console.log("Backend response:", data);
      } catch (error) {
        console.log(error.message);
      }
    }

    connectToBackend();
  }, [] );
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
