import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import PreNav from './components/Public/PreNav.jsx';
import Navbar from './components/Public/Navbar.jsx'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Hero from './components/Hero/Hero.jsx';
import HomePage from './Pages/HomePage.jsx';
import Todays from './components/Todays/Todays.jsx';
import Catagories from './components/Catagories/Catagories.jsx';
import BestSelling from './components/BestSelling/BestSelling.jsx';
import Body from './components/Body/Body.jsx';
import Explore from './components/Explore/Explore.jsx';
import NewArrivl from './components/NewArrival/NewArrivl.jsx';
import Footer from './components/Footer/Footer.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/PreNav",
    element: <PreNav></PreNav>
  },
  {
    path: "/Navbar",
    element: <Navbar></Navbar>
  },
 
  {
    path: "/About",
    element: <About></About>
  },
  {
    path: "/Contact",
    element: <Contact></Contact>
  },
  {
    path: "/SignUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/Hero",
    element: <Hero></Hero>
  },
  {
    path: "/HomePage",
    element: <HomePage></HomePage>
  },
  {
    path: "/Todays",
    element: <Todays></Todays>
  },
  {
    path: "/Catagories",
    element: <Catagories></Catagories>
  },
  {
    path: "/BestSelling",
    element: <BestSelling></BestSelling>
  },
  {
    path: "/Body",
    element: <Body></Body>
  },
  {
    path: "/Explore",
    element: <Explore></Explore>
  },
  {
    path: "/NewArrivl",
    element: <NewArrivl></NewArrivl>
  },
  {
    path: "/Footer",
    element: <Footer></Footer>
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router = {router}></RouterProvider>
  </StrictMode>,
)
