import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import AllCategory from './pages/AllCategory';
import BookReviews from "./pages/BookReviews";
import Phone from "./pages/Phone"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <AllCategory />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/book" ,
        element:<BookReviews/>, 

      },
      {path: "/phone" ,
        element:<Phone/>,

      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);