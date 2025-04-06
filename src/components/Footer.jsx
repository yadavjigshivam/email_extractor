
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-8 bg-gray-900 border-t border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">About Us</h3>
            <p className="text-gray-400">
              Email Extractor my provides professional email extraction tools for marketers and businesses.
              Our tools help you efficiently collect and manage contact information.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 transition-colors hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 transition-colors hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Our Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 transition-colors hover:text-blue-400">
                  Email Extractor
                </Link>
              </li>
              <li>
                <Link to="/tools/phone" className="text-gray-400 transition-colors hover:text-blue-400">
                  Phone Number Extractor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                support@emailextractor.my
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +91 9997494590
              </li>
              <li className="flex items-center text-gray-400">
                <Globe className="w-5 h-5 mr-2" />
                www.emailextractor.my
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© {currentYear} Email Extractor my. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Disclaimer: This tool is intended for legitimate business purposes only. Users are responsible for complying with all applicable laws and regulations regarding email marketing and data collection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
