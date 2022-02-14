import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../containers/Header/Header";
import { Home } from "../pages/Home/Home";
import { Store } from "../pages/Store/Store"
import { MyProducts } from "../pages/MyProducts/MyProducts"
import { NotFound } from "../pages/NotFound/NotFound"
import { Footer } from "../containers/Footer/Footer"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="myproducts" element={<MyProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
