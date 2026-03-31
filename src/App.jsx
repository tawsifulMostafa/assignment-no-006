import './App.css'
import Mainpart from './Components/introduction/Mainpart'
import Navbar from './Components/navbar/Navbar'
import Feedback from './Components/feedback/feedback'
import DigitalTools from './Components/digitalTools/DigitalTools'
import Tool from './Components/digitalTools/Tool'
import GetStarted from './Components/Get Started/GetStarted'
 


 
 
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Mainpart></Mainpart>
   <Feedback></Feedback>
   <DigitalTools></DigitalTools>
  <Tool></Tool>
    <GetStarted></GetStarted>
    </>
  )
}

export default App
 

 

