
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Copy, FileSpreadsheet } from "lucide-react";
import * as XLSX from 'xlsx';

export function PhoneExtractor() {
  const [text, setText] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const { toast } = useToast();

  const extractPhoneNumbers = () => {
    // This regex matches various phone number formats
    const phoneRegex = /(?:\+?\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
    const foundNumbers = text.match(phoneRegex) || [];
    const uniqueNumbers = [...new Set(foundNumbers)];
    
    setPhoneNumbers(uniqueNumbers);
    
    toast({
      title: "Success!",
      description: `Found ${uniqueNumbers.length} unique phone numbers`,
    });
  };

  const copyAllNumbers = () => {
    const numbersText = phoneNumbers.join('\n');
    navigator.clipboard.writeText(numbersText);
    toast({
      title: "Success!",
      description: "All phone numbers copied to clipboard",
    });
  };

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      ["Extracted Phone Numbers"],
      ...phoneNumbers.map(number => [number])
    ]);
    
    ws['!cols'] = [{ wch: 30 }];
    
    XLSX.utils.book_append_sheet(wb, ws, "Phone Numbers");
    XLSX.writeFile(wb, "extracted_phone_numbers.xlsx");
    
    toast({
      title: "Success!",
      description: "Phone numbers exported to Excel file",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Phone Number Extractor
          </motion.h1>
          <p className="text-gray-300 text-lg">Extract phone numbers from any text instantly</p>
        </div>

        <div className="space-y-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here to extract phone numbers..."
            className="w-full h-48 p-6 rounded-xl bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-blue-400 focus:outline-none transition-all duration-300"
          />

          <Button 
            onClick={extractPhoneNumbers} 
            className="w-full bg-blue-500 hover:bg-blue-600 text-lg py-6"
          >
            Extract Phone Numbers <ChevronRight className="ml-2" />
          </Button>

          {phoneNumbers.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold flex items-center">
                  <Phone className="mr-2 text-blue-400" />
                  Found Numbers ({phoneNumbers.length})
                </h2>
                <div className="flex gap-2">
                  <Button onClick={copyAllNumbers} variant="secondary" className="flex items-center">
                    <Copy className="mr-2 w-4 h-4" /> Copy All
                  </Button>
                  <Button onClick={exportToExcel} variant="secondary" className="flex items-center">
                    <FileSpreadsheet className="mr-2 w-4 h-4" /> Export to Excel
                  </Button>
                </div>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700">
                <ul className="space-y-3">
                  {phoneNumbers.map((number, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
                    >
                      <span className="text-blue-300">{number}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
