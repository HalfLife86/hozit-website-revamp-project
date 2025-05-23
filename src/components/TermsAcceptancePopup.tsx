
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const TermsAcceptancePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hasAcceptedTerms', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // For mobile devices, use Sheet component
  if (isMobileView) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="px-0 sm:max-w-md">
          <SheetHeader className="px-4">
            <SheetTitle className="text-center">Terms of Use</SheetTitle>
            <SheetDescription className="text-center">
              Please read and accept our terms of use to continue.
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 py-2 max-h-[60vh] overflow-y-auto">
            <p className="text-sm text-gray-700 mb-4">
              By using HozIT Domain Hosting services, you agree to comply with and be bound by these Terms of Use. 
              Please review them carefully before using our services.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              For the complete terms, please visit our <Link to="/terms-of-service" className="text-orange-600 hover:underline">Terms of Service</Link> page.
            </p>
          </div>
          <div className="flex flex-col space-y-2 px-4 mt-2">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handleAccept}
            >
              I Accept
            </Button>
            <Button 
              variant="outline"
              onClick={handleClose}
            >
              Decline
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // For desktop devices, use AlertDialog component
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">Terms of Use</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Please read and accept our terms of use to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="max-h-[40vh] overflow-y-auto py-2">
          <p className="text-sm text-gray-700 mb-4">
            By using HozIT Domain Hosting services, you agree to comply with and be bound by these Terms of Use. 
            Please review them carefully before using our services.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            For the complete terms, please visit our <Link to="/terms-of-service" className="text-orange-600 hover:underline">Terms of Service</Link> page.
          </p>
        </div>
        
        <AlertDialogFooter className="flex justify-between">
          <AlertDialogCancel onClick={handleClose}>Decline</AlertDialogCancel>
          <AlertDialogAction 
            className="bg-orange-600 hover:bg-orange-700"
            onClick={handleAccept}
          >
            I Accept
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TermsAcceptancePopup;
