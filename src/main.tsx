import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from './components/page/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
