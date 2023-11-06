import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './components/Home'
import BookPage from './components/BookPage'
import MenuPage from './components/MenuPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/BookPage",
    element: <BookPage />,
  },
  {
    path: "/MenuPage",
    element: <MenuPage />,
  },
  {
    path: "*",
    element: <Home />
  },
], { basename: "/restaurant-App/" });

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
