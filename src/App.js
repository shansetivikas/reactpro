import { BrowserRouter, Routes, Route
 } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Contact from "./Contact";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navigation />
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/contact" element={<Contact />}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;