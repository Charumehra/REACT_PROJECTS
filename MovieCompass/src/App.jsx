import React from 'react'
import "swiper/css";
import "./assets/boxicons-2.1.4/css/boxicons.min.css"
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './Routes/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    
    </BrowserRouter>
  )
}

export default App