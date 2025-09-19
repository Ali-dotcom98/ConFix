import React from 'react'
import Home from './Components/Home'
import NavigationBar from './Components/Header/NavigationBar'
import { AboutUs } from './Components/AboutUs'
import Services from './Components/Services'
import Porfolio from './Components/Porfolio'
import Team from './Components/Team'
import Testimonail from './Components/Testimonail'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'odometer/themes/odometer-theme-default.css';
const App = () => {
  return (
    <>
    <NavigationBar/>
    <Home/>
    <AboutUs/>
    <Services/>
    <Porfolio/>
    <Team/>
    <Testimonail/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App