import NavBar from './Components/NavBar.jsx'
import MainSection from './Components/MainSection.jsx'
import Footer from './Components/Footer.jsx'
import Counter from './Components/Counter.jsx'
import { useState } from 'react'

export default function App() {
    return (
        <>
            <NavBar/>
            <MainSection/>
            <Footer/>
            {/* <Counter/> */}
        </>
    )
}