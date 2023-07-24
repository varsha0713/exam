import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Header" element={<Header />} />
          <Route path="AboutUs" element={<AboutUs />} />
          {/* <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;