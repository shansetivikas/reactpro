// import ClassRoom from "./ClassRoom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {

  return (
    <>
     <Router>
        {/* <p>Hello</p>
        <ClassRoom schlname = "delhi"></ClassRoom> */}
        
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
           <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;