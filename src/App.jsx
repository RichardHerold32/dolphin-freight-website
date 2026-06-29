import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageShimmer from "./components/PageShimmer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const BookingSuccess = lazy(() => import("./pages/BookingSuccess"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy-loaded secondary widgets (improves initial load time / TBT)
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const BookNowWidget = lazy(() => import("./components/BookNowWidget"));

function App() {
  return (
    <>
    <ScrollToTop />
    <ErrorBoundary>
      <Navbar />

      <Suspense fallback={<PageShimmer />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      
      {/* Async-load secondary UI widgets without blocking page load */}
      <Suspense fallback={null}>
        <WhatsAppButton />
        <ScrollToTopButton />
        <BookNowWidget />
      </Suspense>
    </ErrorBoundary>
    </>
  );
}

export default App;
