import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import './index.css'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Dummycomp from './components/Dummycomp'
import ProtectecdRoute from './components/ProtectedRoute'
import ContactSection from "./components/ContactSection";
import Aboutus from "./components/Aboutus";
import Blogpage from "./components/Blogpage";

function App() {
  return (
    <div style={{ overflowX: "hidden"}} >
      <Router> 
            <Header />
        <Routes>
          <Route path='/' element={<div>
              <Hero />
          </div>}></Route>
          <Route path='/service' element={ <ProtectecdRoute >
            <Dummycomp />
          </ProtectecdRoute>}></Route>

          <Route path='/contactus' element={ <ContactSection /> } />
          <Route path='/aboutus' element={ <Aboutus /> } />
          <Route path='/blog' element={ <Blogpage /> } />
          
        </Routes>
         <Footer />
      </Router>
    {/* </Header> */}

    </div>
  );
}

export default App;
