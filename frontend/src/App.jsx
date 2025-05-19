import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Logo from './components/Logo';
import AgentList from './components/AgentList';
import CreateAgentForm from './components/CreateAgentForm';
import FileUploadForm from './components/UploadForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signup" replace />
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
    path: '/api/agents',
    element:( 
      <div>
        <NavBar/>
        <AgentList/>
      </div>
      )
  },

  {
    path: '/api/agents/create-agent',
    element:( 
      <div>
        <NavBar/>
        <CreateAgentForm/>
      </div>
      )
  },

  {
    path: '/api/files/upload',
    element:( 
      <div>
        <NavBar/>
        <FileUploadForm/>
      </div>
      )
  },
]);

function App() {
  return (
    <>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
      
    </>
    
  )
}

export default App
