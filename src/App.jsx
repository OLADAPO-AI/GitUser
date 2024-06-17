import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Modal from './pages/Modal'
import Repository from './pages/Repository'
import Homelayout from './pages/Homelayout'
import Newsletter from './pages/Newsletter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'addrepo',
        element: <Modal />,
      },
      {
        path: 'repository',
        element: <Repository />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
