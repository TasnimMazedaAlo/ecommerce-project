
import React from 'react'
import Navbar from '../components/Public/Navbar'
import PreNav from '../components/Public/PreNav'
import Hero from '../components/Hero/Hero'
import Todays from '../components/Todays/Todays'
import Catagories from '../components/Catagories/Catagories'
import BestSelling from '../components/BestSelling/BestSelling'
import Body from '../components/Body/Body'
import Explore from '../components/Explore/Explore'
import NewArrivl from '../components/NewArrival/NewArrivl'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <PreNav></PreNav>
        <Navbar></Navbar>
        <Hero></Hero>
        <Todays></Todays>
        <Catagories></Catagories>
        <BestSelling></BestSelling>
        <Body></Body>
        <Explore></Explore>
        <NewArrivl></NewArrivl>
        <Footer></Footer>
    </div>
  )
}

export default HomePage