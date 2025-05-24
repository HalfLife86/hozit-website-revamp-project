
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample blog posts based on the services
const blogPosts = [
  {
    id: 1,
    title: 'Why Your Business Needs Professional Website Hosting',
    excerpt: 'Discover the advantages of reliable website hosting for your business and why it matters for your online presence.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'Website Hosting',
    author: 'HozIT Team',
    date: 'May 20, 2025',
    tags: ['Hosting', 'Performance', 'Uptime'],
    link: '/website-hosting'
  },
  {
    id: 2,
    title: 'Choosing the Right Domain Name for Your Business',
    excerpt: 'Learn how to select the perfect domain name that aligns with your brand and helps customers find you online.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'Domain Registration',
    author: 'HozIT Team',
    date: 'May 18, 2025',
    tags: ['Domains', 'Branding', 'SEO'],
    link: '/domain-registration'
  },
  {
    id: 3,
    title: 'Top Web Development Trends for 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge web development trends that are shaping the digital landscape.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'Web Development',
    author: 'HozIT Team',
    date: 'May 15, 2025',
    tags: ['Web Design', 'Development', 'Trends'],
    link: '/web-development'
  },
  {
    id: 4,
    title: 'Essential SEO Strategies to Boost Your Website Ranking',
    excerpt: 'Implement these proven SEO techniques to improve your website visibility and drive more organic traffic.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'SEO',
    author: 'HozIT Team',
    date: 'May 12, 2025',
    tags: ['SEO', 'Marketing', 'Rankings'],
    link: '/seo'
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Protect your business from cyber threats with these essential security measures that every small business should implement.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'Cybersecurity',
    author: 'HozIT Team',
    date: 'May 10, 2025',
    tags: ['Security', 'Protection', 'Data'],
    link: '/cybersecurity'
  },
  {
    id: 6,
    title: 'How Managed IT Support Can Save Your Business Money',
    excerpt: 'Discover how outsourcing your IT support needs can lead to significant cost savings while improving efficiency.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'IT Support',
    author: 'HozIT Team',
    date: 'May 8, 2025',
    tags: ['IT Support', 'Cost Savings', 'Efficiency'],
    link: '/it-support'
  },
  {
    id: 7,
    title: 'The Benefits of Cloud-Based Server Solutions',
    excerpt: 'Explore the advantages of migrating your server infrastructure to the cloud for better scalability and reliability.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'Server Support',
    author: 'HozIT Team',
    date: 'May 5, 2025',
    tags: ['Cloud', 'Servers', 'Infrastructure'],
    link: '/server-support'
  },
  {
    id: 8,
    title: 'Mobile App Development: Native vs. Hybrid Approaches',
    excerpt: 'Understand the differences between native and hybrid app development to make the right choice for your business needs.',
    image: '/lovable-uploads/5e72b0ed-4de3-4e17-90b1-afbbc6ebb050.png',
    category: 'App Development',
    author: 'HozIT Team',
    date: 'May 3, 2025',
    tags: ['Mobile Apps', 'Development', 'Technology'],
    link: '/app-development'
  },
];

const BlogContent = () => {
  return (
    <div id="blog-content" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <Tag className="h-3 w-3 mr-1" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  asChild
                >
                  <Link to={post.link}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
