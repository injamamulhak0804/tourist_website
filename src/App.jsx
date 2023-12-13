import TopBar from "./component/TopBar"
import NavBar from "./component/NavBar"
import Hero from "./component/Hero"
import Activites from "./component/Activites"
import Booking from "./component/Booking"
import './App.css'
import Gallery from "./component/Gallery"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <Activites />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App
