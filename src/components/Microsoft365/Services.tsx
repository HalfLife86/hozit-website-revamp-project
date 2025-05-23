
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Microsoft365Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Microsoft Office 365 Setup and Migration</h2>
          <p className="text-lg mb-10 text-gray-700">
            Transitioning to Microsoft Office 365 is a strategic move for businesses seeking enhanced collaboration, productivity, and flexibility. At Hozit Domain Hosting, we streamline the setup and migration process to ensure a seamless transition to the cloud-based productivity suite.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-10">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Our Setup & Migration Services Include:</h3>
            <ul className="space-y-4">
              <li className="ml-6">Microsoft 365 account setup and configuration</li>
              <li className="ml-6">Seamless data migration (emails, contacts, calendars, documents)</li>
              <li className="ml-6">User account creation and license assignment</li>
              <li className="ml-6">Domain integration and DNS configuration</li>
              <li className="ml-6">Mailbox and SharePoint migration</li>
              <li className="ml-6">Pre- and post-migration testing and support</li>
            </ul>
            <p className="mt-6 text-lg font-medium text-gray-700">
              We handle the technical complexities so you can focus on your business.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Why Choose Microsoft 365 with Hozit?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert setup and zero-downtime migrations</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Tailored packages for small to medium businesses</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ongoing support and training for your team</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Secure cloud-based solutions that scale with your business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Services;
