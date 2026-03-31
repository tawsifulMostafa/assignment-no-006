import './App.css'
import Mainpart from './Components/introduction/Mainpart'
import Navbar from './Components/navbar/Navbar'
import Feedback from './Components/feedback/feedback'
import DigitalTools from './Components/digitalTools/DigitalTools'
import Tool from './Components/digitalTools/Tool'
import GetStarted from './Components/Get Started/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import OptionalSection from './Components/optional part/OptionalSection.jsx'
import Footer from './Components/footer/Footer.jsx'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar cartCount={cartItems.length}></Navbar>
      <Mainpart></Mainpart>
      <Feedback></Feedback>
      <DigitalTools></DigitalTools>
      <Tool cartItems={cartItems} setCartItems={setCartItems}></Tool>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <OptionalSection></OptionalSection>
      <Footer></Footer>
       <ToastContainer />
    </>
  )
}

export default App








