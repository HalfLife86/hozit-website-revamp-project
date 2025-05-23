
import React from 'react';
import { Building, ShoppingCart, Image, FileText, Users, Heart, GraduationCap, Calendar, Home, Plane } from 'lucide-react';

const websiteTypes = [
  {
    title: 'Business Websites',
    description: 'Showcase your products, services, and company information with a professional business website that establishes your credibility and helps you attract new customers.',
    icon: Building
  },
  {
    title: 'E-commerce Websites',
    description: 'Sell your products or services online with a feature-rich e-commerce website that includes shopping carts, payment gateways, and secure checkout processes.',
    icon: ShoppingCart
  },
  {
    title: 'Portfolio Websites',
    description: 'Display your work, portfolio, or projects with a visually stunning portfolio website that highlights your skills and expertise in your industry.',
    icon: Image
  },
  {
    title: 'Blog Websites',
    description: 'Share your thoughts, ideas, and expertise with the world through a dynamic blog website that allows you to publish articles, videos, and other content on a regular basis.',
    icon: FileText
  },
  {
    title: 'Membership Websites',
    description: 'Create a community or membership-based website that offers exclusive content, resources, and benefits to your members or subscribers.',
    icon: Users
  },
  {
    title: 'Nonprofit Websites',
    description: 'Raise awareness, attract donors, and promote your cause with a nonprofit website that effectively communicates your mission and impact.',
    icon: Heart
  },
  {
    title: 'Educational Websites',
    description: 'Provide online courses, training, or educational resources with an educational website that engages learners and facilitates knowledge sharing.',
    icon: GraduationCap
  },
  {
    title: 'Event Websites',
    description: 'Promote upcoming events, conferences, or workshops with an event website that provides information, registration, and ticketing options for attendees.',
    icon: Calendar
  },
  {
    title: 'Real Estate Websites',
    description: 'Showcase properties, listings, and real estate services with a real estate website that helps you attract buyers, sellers, and investors.',
    icon: Home
  },
  {
    title: 'Travel Websites',
    description: 'Inspire travelers and facilitate bookings with a travel website that features destinations, itineraries, and booking options for flights, accommodations, and activities.',
    icon: Plane
  }
];

const WebDevTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Types of Websites for Different Businesses</h2>
          <p className="text-lg text-gray-600">
            Every business has unique needs and objectives, and we specialize in creating custom websites tailored to meet those needs. 
            Whether you're a small local business, a large corporation, or an e-commerce retailer, we have the expertise to build the perfect website for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {websiteTypes.map((type, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="mr-4 text-orange-500">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{type.title}</h3>
              </div>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevTypes;
