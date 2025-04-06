
import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container px-4 py-12 mx-auto"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
          About Email Marketing & Our Tools
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="mb-6 text-lg text-gray-300">
            Email marketing remains one of the most effective digital marketing strategies in today's business landscape. With an ROI that can reach 4400%, it's an essential tool for businesses of all sizes. Our email extraction tools are designed to help you build and maintain your email marketing campaigns effectively and efficiently.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-white">Why Email Marketing Matters</h2>
          <p className="mb-6 text-gray-300">
            Email marketing allows businesses to:
            - Build direct relationships with customers
            - Deliver personalized content and offers
            - Generate leads and drive conversions
            - Maintain customer engagement
            - Measure and analyze campaign performance
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-white">Our Commitment to Quality</h2>
          <p className="mb-6 text-gray-300">
            At Email Extractor Pro, we're committed to providing high-quality tools that help businesses streamline their email marketing efforts. Our tools are designed with accuracy, efficiency, and ease of use in mind, ensuring you can focus on what matters most - growing your business.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-white">Best Practices in Email Marketing</h2>
          <p className="mb-6 text-gray-300">
            While our tools help you collect email addresses, it's important to follow best practices:
            - Always obtain consent before sending marketing emails
            - Provide value to your subscribers
            - Maintain list hygiene
            - Respect privacy and data protection laws
            - Regular testing and optimization of campaigns
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-white">Our Features</h2>
          <ul className="mb-6 text-gray-300 list-disc list-inside">
            <li>Advanced email pattern recognition</li>
            <li>Bulk extraction capabilities</li>
            <li>Export to multiple formats</li>
            <li>Duplicate removal</li>
            <li>Data validation</li>
            <li>Phone number extraction</li>
          </ul>

          <div className="p-6 mt-8 bg-gray-800 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold text-white">Start Improving Your Email Marketing Today</h3>
            <p className="text-gray-300">
              Whether you're just starting with email marketing or looking to improve your existing campaigns, our tools can help you achieve your goals more efficiently. Try our email extractor tool today and see the difference it can make in your marketing efforts.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
