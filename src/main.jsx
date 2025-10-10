import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FollowFollower from './FollowFollower.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'



const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/details/:id",
    element: <FollowFollower />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute}/>
  </StrictMode>,
)
