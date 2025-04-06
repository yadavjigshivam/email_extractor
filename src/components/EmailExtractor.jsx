
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Settings, Mail, Download, Trash2, Copy, ChevronRight, Star, FileSpreadsheet } from "lucide-react";
import * as XLSX from 'xlsx';

export function EmailExtractor() {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState({
    totalExtracted: 0,
    lastExtraction: null,
  });
  const { toast } = useToast();

  useEffect(() => {
    const savedStats = localStorage.getItem("emailExtractorStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const extractEmails = () => {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const foundEmails = text.match(emailRegex) || [];
    const uniqueEmails = [...new Set(foundEmails)];
    
    setEmails(uniqueEmails);
    
    const existingEmails = JSON.parse(localStorage.getItem("extractedEmails") || "[]");
    const allEmails = [...existingEmails, ...uniqueEmails];
    localStorage.setItem("extractedEmails", JSON.stringify(allEmails));

    const newStats = {
      totalExtracted: stats.totalExtracted + uniqueEmails.length,
      lastExtraction: new Date().toISOString(),
    };
    setStats(newStats);
    localStorage.setItem("emailExtractorStats", JSON.stringify(newStats));

    toast({
      title: "Success!",
      description: `Found ${uniqueEmails.length} unique email addresses`,
    });
  };

  const handleAdminLogin = () => {
    if (password === "admin123") {
      setIsAdmin(true);
      toast({
        title: "Welcome Admin!",
        description: "You now have access to admin controls",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid admin password",
        variant: "destructive",
      });
    }
  };

  const clearAllData = () => {
    localStorage.removeItem("extractedEmails");
    localStorage.removeItem("emailExtractorStats");
    setEmails([]);
    setStats({
      totalExtracted: 0,
      lastExtraction: null,
    });
    toast({
      title: "Data Cleared",
      description: "All stored emails have been removed",
    });
  };

  const copyAllEmails = () => {
    const emailText = emails.join('\n');
    navigator.clipboard.writeText(emailText);
    toast({
      title: "Success!",
      description: "All emails copied to clipboard",
    });
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      ["Extracted Emails"],
      ...emails.map(email => [email])
    ]);
    
    ws['!cols'] = [{ wch: 30 }];
    
    XLSX.utils.book_append_sheet(wb, ws, "Emails");
    XLSX.writeFile(wb, "extracted_emails.xlsx");
    
    toast({
      title: "Success!",
      description: "Emails exported to Excel file",
    });
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Top Ad Space */}
      <div className="w-full h-[90px] bg-gray-800 bg-opacity-50 flex items-center justify-center border-b border-gray-700 mb-8">
        <div className="text-center text-gray-400">Advertisement Space</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 text-center">
          <motion.h1 
            className="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Email Extractor Pro
          </motion.h1>
          <p className="text-lg text-gray-300">Extract email addresses from any text instantly</p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          {[
            { icon: Mail, title: "Instant Extraction", desc: "Extract emails in seconds" },
            { icon: Star, title: "100% Accurate", desc: "Advanced pattern matching" },
            { icon: Download, title: "Easy Export", desc: "Download results instantly" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl"
            >
              <feature.icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {!isAdmin && (
          <motion.div 
            className="p-6 mb-8 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Admin Access</h2>
            </div>
            <div className="flex gap-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="flex-1 p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none"
              />
              <Button onClick={handleAdminLogin} className="bg-blue-500 hover:bg-blue-600">
                Login
              </Button>
            </div>
          </motion.div>
        )}

        {/* Side Ad Space */}
        <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 w-[160px] h-[600px] bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
          <div className="mt-4 text-center text-gray-400">Vertical Ad</div>
        </div>

        <div className="space-y-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here to extract email addresses..."
            className="w-full h-48 p-6 text-white transition-all duration-300 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl focus:border-blue-400 focus:outline-none"
          />

          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={extractEmails} 
              className="flex-1 py-6 text-lg bg-blue-500 hover:bg-blue-600"
            >
              Extract Emails <ChevronRight className="ml-2" />
            </Button>
            {isAdmin && (
              <Button onClick={clearAllData} variant="destructive" className="flex items-center">
                <Trash2 className="w-4 h-4 mr-2" /> Clear All
              </Button>
            )}
          </div>

          {/* Stats Display */}
          {isAdmin && (
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl">
                <h3 className="mb-2 text-gray-400">Total Extracted</h3>
                <p className="text-2xl font-bold text-blue-400">{stats.totalExtracted}</p>
              </div>
              <div className="p-4 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl">
                <h3 className="mb-2 text-gray-400">Last Extraction</h3>
                <p className="text-sm text-blue-400">
                  {stats.lastExtraction ? new Date(stats.lastExtraction).toLocaleString() : 'Never'}
                </p>
              </div>
            </div>
          )}

          {emails.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center text-2xl font-semibold">
                  <Mail className="mr-2 text-blue-400" />
                  Found Emails ({emails.length})
                </h2>
                <div className="flex gap-2">
                  <Button onClick={copyAllEmails} variant="secondary" className="flex items-center">
                    <Copy className="w-4 h-4 mr-2" /> Copy All
                  </Button>
                  <Button onClick={exportToExcel} variant="secondary" className="flex items-center">
                    <FileSpreadsheet className="w-4 h-4 mr-2" /> Export to Excel
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl">
                <ul className="space-y-3">
                  {emails.map((email, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 transition-all duration-300 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70"
                    >
                      <span className="text-blue-300">{email}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Ad Space */}
        <div className="mt-12 w-full h-[90px] bg-gray-800 bg-opacity-50 flex items-center justify-center rounded-xl border border-gray-700">
          <div className="text-center text-gray-400">Ad</div>
        </div>
      </motion.div>
    </div>
  );
}
