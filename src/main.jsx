import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home/HomePage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import ShopPage from './pages/shop/ShopPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/about',
        element: <AboutPage/>,
      },
      {
        path: '/contact',
        element: <ContactPage/>,
      },
      {
        path: '/shop',
        element: <ShopPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
