
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              HozIT <span className="text-black">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-lg">
              "Stay updated with the latest in IT solutions, tech trends, and industry insights"
            </p>
            <p className="text-white mb-8">
              Our blog provides valuable information, tips, and expert advice to help your business thrive in the digital landscape.
            </p>
            <div>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white font-bold"
                onClick={() => {
                  const blogContent = document.getElementById('blog-content');
                  if (blogContent) {
                    blogContent.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Read Latest Articles
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-2 animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <Button className="ml-2 bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">IT Support</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Web Development</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">Cybersecurity</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Hosting</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Software</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
