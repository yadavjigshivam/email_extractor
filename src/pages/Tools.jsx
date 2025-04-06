
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export function Tools() {
  const tools = [
    {
      icon: Mail,
      title: "Email Extractor",
      description: "Extract email addresses from any text content",
      path: "/"
    },
    {
      icon: Phone,
      title: "Phone Number Extractor",
      description: "Extract phone numbers from any text content",
      path: "/tools/phone"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Tools
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
            >
              <Link to={tool.path} className="block">
                <tool.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h2 className="text-2xl font-semibold mb-2 text-white">{tool.title}</h2>
                <p className="text-gray-300">{tool.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
