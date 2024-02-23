import { BrowserRouter, Routes, Route
 } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Layout from "./Layout";
import Help from "./Help";
// import Effect from "./Effect";


const App = () => {

  return (
    // <Effect />
    <>
      <BrowserRouter>
        <Navigation />
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="contact" element={<Contact />}></Route>
               <Route path="layout" element={<Layout />}>
                  <Route path="help" element={<Help />}></Route>
               </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;