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

function App() {
 return (
   <>
    <Navbar></Navbar>
    <Mainpart></Mainpart>
  <Feedback></Feedback>
  <DigitalTools></DigitalTools>
 <Tool></Tool>
   <GetStarted></GetStarted>
   <Pricing></Pricing>
   <OptionalSection></OptionalSection>
   <Footer></Footer>
   </>
 )
}

export default App
 


 
 

 

