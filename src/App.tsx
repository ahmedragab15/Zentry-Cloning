import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { SmoothScrollProvider } from "./context/ScrollProviderContext.tsx";
import NavBar from "./components/NavBar.tsx";
import Features from "./components/Features.tsx";
import Story from "./components/Story.tsx";
import Pinned from "./components/Pinned.tsx";
import WhatWeDo from "./components/WhatWeDo.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
function App() {
  return (
    <>
      <SmoothScrollProvider>
        <NavBar />
        <div className="  overflow-hidden main-container relative min-h-screen w-screen ">
          <Hero />
          <AboutUs />
          <Features />
          <Story />
          <Pinned />
          <WhatWeDo />
          <ContactUs/>
          <Footer/>
        </div>
      </SmoothScrollProvider>
    </>
  );
}

export default App;
