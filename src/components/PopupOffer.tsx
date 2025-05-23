
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';

const PopupOffer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      // Set timeout to show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that user has visited
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl p-0 border-4 border-[#ff6600] rounded-xl">
        <div className="bg-white p-6 rounded-lg font-sans text-black">
          <h2 className="text-center text-[#ff6600] text-2xl font-bold">🚀 Get a .co.za Domain + 12 Months Hosting for R199!</h2>
          <p className="text-center text-lg text-gray-800 mt-2">🔥 <strong>Limited to the first 1000 customers</strong></p>

          <hr className="border-t-2 border-black my-5" />

          <h3 className="text-black text-xl font-bold">🎁 You Get the Following:</h3>
          <ul className="list-none pl-0 text-base leading-relaxed mt-3 space-y-1">
            <li>✅ <strong>10 GB</strong> SSD Web Space</li>
            <li>✅ <strong>500 GB</strong> Bandwidth</li>
            <li>✅ <strong>1</strong> Domain</li>
            <li>✅ <strong>1</strong> Max FTP Account</li>
            <li>✅ <strong>2</strong> Max Mailing Lists</li>
            <li>✅ <strong>2</strong> Max SQL Databases</li>
            <li>✅ <strong>5</strong> Subdomains</li>
            <li>✅ <strong>1</strong> Email Account</li>
            <li>✅ <strong>Free</strong> SSL Certificate</li>
            <li>✅ <strong>LiteSpeed</strong> Server</li>
            <li>✅ <strong>JetBackup</strong> (Daily)</li>
            <li>✅ <strong>Imunify360</strong> Security</li>
            <li>✅ <strong>CloudLinux</strong> Operating System</li>
            <li>✅ <strong>cPanel</strong> Control Panel</li>
            <li>✅ <strong>Softaculous</strong> One-Click Installs</li>
            <li>✅ <strong>Basic 24/7 Support</strong> (2–8 hour response)</li>
          </ul>

          <div className="text-center mt-7">
            <Link 
              to="/website-hosting" 
              className="inline-block bg-[#ff6600] text-white px-7 py-3 text-lg rounded-lg font-bold shadow-lg hover:bg-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              👉 Claim This Offer Now
            </Link>
          </div>

          <p className="text-center mt-4 text-sm text-gray-600">Don't miss out – this deal won't last long!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupOffer;
