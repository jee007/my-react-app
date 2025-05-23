import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import HomePage from '@/pages/HomePage';
    import PricingPage from '@/pages/PricingPage';
    import ContactPage from '@/pages/ContactPage';
    import BookingPage from '@/pages/BookingPage';
    import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
    import TermsOfServicePage from '@/pages/TermsOfServicePage';
    import ServicesPage from '@/pages/ServicesPage';
    import { Toaster } from '@/components/ui/toaster';
    import Navbar from '@/components/Navbar';
    import Footer from '@/components/Footer';

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book-inspection" element={<BookingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;