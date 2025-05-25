
import React from 'react';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostHeroProps {
  title: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const BlogPostHero = ({ title, date, author, category, imageUrl, imageAlt }: BlogPostHeroProps) => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
          />
          
          <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">{category}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHero;
