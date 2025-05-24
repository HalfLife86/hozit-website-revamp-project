import React from 'react';
import { Separator } from "@/components/ui/separator";

const TermsContent = () => {
  return (
    <section id="terms-content" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
          <p className="text-gray-600 mb-8">Last Updated: May 24, 2025</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700">
                By accessing and using the services of HozIT ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Description of Service</h3>
              <p className="text-gray-700 mb-4">
                HozIT provides a range of IT services, including but not limited to website hosting, domain registration, web development, SEO, cybersecurity, IT support, server support, app development, network design, Microsoft 365 setup, computer hardware, and software licensing.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. User Responsibilities</h3>
              <p className="text-gray-700 mb-4">
                You agree to use our services in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Intellectual Property</h3>
              <p className="text-gray-700">
                All content, trademarks, and data on our website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, and designs, are the property of or licensed to HozIT and as such, are protected from infringement by domestic and international legislation and treaties.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Payment and Fees</h3>
              <p className="text-gray-700">
                You agree to pay all fees and charges specified for the services you purchase. We reserve the right to change our fees at any time, provided that we notify you in advance.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Limitation of Liability</h3>
              <p className="text-gray-700">
                To the maximum extent permitted by law, HozIT shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Termination</h3>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Governing Law</h3>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of South Africa, without regard to its conflict of law principles.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to These Terms</h3>
              <p className="text-gray-700">
                We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. We encourage you to review these Terms periodically for any changes.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions or concerns about these Terms of Service or our practices, please contact us at:
              </p>
              <div className="mt-3">
                <p className="text-gray-700">Email: terms@hozit.com</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
                <p className="text-gray-700">Address: 123 Tech Street, Suite 100, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
