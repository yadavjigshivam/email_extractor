
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/pages/About";
import { Privacy } from "@/pages/Privacy";
import { Tools } from "@/pages/Tools";
import { PhoneExtractor } from "@/pages/PhoneExtractor";
import { Toaster } from "@/components/ui/toaster";
import { EmailExtractor } from "@/components/EmailExtractor";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<EmailExtractor />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/phone" element={<PhoneExtractor />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
