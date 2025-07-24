
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TermsAcceptancePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has accepted terms before
    const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
    
    if (!hasAcceptedTerms) {
      // Show popup if terms haven't been accepted
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasAcceptedTerms', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] sm:max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-center">Terms of Use</DialogTitle>
          <DialogDescription className="text-center">
            Please read and accept our terms of use to continue.
          </DialogDescription>
        </DialogHeader>
        
        <div className="max-h-[50vh] overflow-y-auto py-2">
          <p className="text-sm text-gray-700 mb-4">
            By using HozIT Domain Hosting services, you agree to comply with and be bound by these Terms of Use. 
            Please review them carefully before using our services.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            For the complete terms, please visit our <Link to="/terms-of-service" className="text-orange-600 hover:underline">Terms of Service</Link> page.
          </p>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline"
            onClick={handleClose}
            className="w-full sm:w-auto"
          >
            Decline
          </Button>
          <Button 
            className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto"
            onClick={handleAccept}
          >
            I Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsAcceptancePopup;
