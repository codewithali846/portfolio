import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeaturesProvider } from "./context/FeaturesContext";
import { PricingProvider } from "./context/PricingContext";
import { ContactProvider } from "./context/ContactContext";

import Navbar from "./comp/Navbar";
import Home from "./Home";
import Features from "./Features";
import Pricing from "./Pricing";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Blog from "./Blog";
import Contants from "./Contants";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <FeaturesProvider>
      <PricingProvider>
        <ContactProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contants />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </BrowserRouter>
        </ContactProvider>
      </PricingProvider>
    </FeaturesProvider>
  );
}

export default App;
