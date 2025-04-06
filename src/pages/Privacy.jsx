
import React from "react";
import { motion } from "framer-motion";

export function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container px-4 py-12 mx-auto"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="mb-6 text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
            <p className="text-gray-300">
              Email Extractor my ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p className="text-gray-300">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>Email addresses and phone numbers you extract</li>
              <li>Account information (if you create an account)</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>Provide and maintain our services</li>
              <li>Improve and optimize our website</li>
              <li>Respond to your requests and inquiries</li>
              <li>Send you technical notices and updates</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">4. Data Security</h2>
            <p className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">5. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to:
            </p>
            <ul className="mt-4 text-gray-300 list-disc list-inside">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4 text-gray-300">
              Email: privacy@emailextractor.my<br />
              Phone: +91 9997494590
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
