import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageShimmer from "./components/PageShimmer";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import BookingSuccess from "./pages/BookingSuccess";


// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));

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
          <Route path="*" element={<NotFound />} />
          <Route path="/booking-success" element={<BookingSuccess />} />

        </Routes>
      </Suspense>

      <Footer />
    </ErrorBoundary>
    </>
  );
}

export default App;
