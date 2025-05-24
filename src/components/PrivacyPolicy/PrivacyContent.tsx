
import React from 'react';
import { Separator } from "@/components/ui/separator";

const PrivacyContent = () => {
  return (
    <section id="privacy-content" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          <p className="text-gray-600 mb-8">Last Updated: May 24, 2025</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Introduction</h3>
              <p className="text-gray-700">
                Welcome to HozIT ("we," "our," or "us"). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website.</li>
                <li><strong>Business Information:</strong> Company name, job title, and business contact information.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, device information, and cookies.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Providing and maintaining our services</li>
                <li>Improving our website and services</li>
                <li>Communicating with you about our services, promotions, and updates</li>
                <li>Responding to your inquiries and service requests</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h3>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Third-Party Disclosure</h3>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent. This does not include trusted third parties who assist us in operating our website or servicing you, as long as these parties agree to keep this information confidential.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Cookies and Tracking Technologies</h3>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Your Data Protection Rights</h3>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Children's Privacy</h3>
              <p className="text-gray-700">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">9. Changes to This Privacy Policy</h3>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10. Contact Us</h3>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-3">
                <p className="text-gray-700">Email: privacy@hozit.com</p>
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

export default PrivacyContent;

