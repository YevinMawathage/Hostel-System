import React from "react";
import AppRoutes from "./Routes/routes";
import Admin from "./Pages/Admin";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import PropertyListing from "./Component/PropertyListing";
import Map from "./Component/Map";



function App() {
  return (
    <div className="Container">
        <Navbar />
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
