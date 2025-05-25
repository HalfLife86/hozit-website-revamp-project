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
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    category: 'Website Hosting',
    author: 'HozIT Team',
    date: 'May 20, 2025',
    tags: ['Hosting', 'Performance', 'Uptime'],
    link: '/blog/website-hosting'
  },
  {
    id: 2,
    title: 'Choosing the Right Domain Name for Your Business',
    excerpt: 'Learn how to select the perfect domain name that aligns with your brand and helps customers find you online.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Domain Registration',
    author: 'HozIT Team',
    date: 'May 18, 2025',
    tags: ['Domains', 'Branding', 'SEO'],
    link: '/blog/domain-registration'
  },
  {
    id: 3,
    title: 'Top Web Development Trends for 2025',
    excerpt: 'Stay ahead of the curve with these cutting-edge web development trends that are shaping the digital landscape.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Web Development',
    author: 'HozIT Team',
    date: 'May 15, 2025',
    tags: ['Web Design', 'Development', 'Trends'],
    link: '/blog/web-development-trends'
  },
  {
    id: 4,
    title: 'Essential SEO Strategies to Boost Your Website Ranking',
    excerpt: 'Implement these proven SEO techniques to improve your website visibility and drive more organic traffic.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: 'SEO',
    author: 'HozIT Team',
    date: 'May 12, 2025',
    tags: ['SEO', 'Marketing', 'Rankings'],
    link: '/blog/seo-strategies'
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Protect your business from cyber threats with these essential security measures that every small business should implement.',
    image: '/lovable-uploads/eeb2046c-2163-405d-961b-abb577cfd030.png',
    category: 'Cybersecurity',
    author: 'HozIT Team',
    date: 'May 10, 2025',
    tags: ['Security', 'Protection', 'Data'],
    link: '/blog/cybersecurity-best-practices'
  },
  {
    id: 6,
    title: 'How Managed IT Support Can Save Your Business Money',
    excerpt: 'Discover how outsourcing your IT support needs can lead to significant cost savings while improving efficiency.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    category: 'IT Support',
    author: 'HozIT Team',
    date: 'May 8, 2025',
    tags: ['IT Support', 'Cost Savings', 'Efficiency'],
    link: '/blog/managed-it-support'
  },
  {
    id: 7,
    title: 'The Benefits of Cloud-Based Server Solutions',
    excerpt: 'Explore the advantages of migrating your server infrastructure to the cloud for better scalability and reliability.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    category: 'Server Support',
    author: 'HozIT Team',
    date: 'May 5, 2025',
    tags: ['Cloud', 'Servers', 'Infrastructure'],
    link: '/blog/cloud-server-solutions'
  },
  {
    id: 8,
    title: 'Mobile App Development: Native vs. Hybrid Approaches',
    excerpt: 'Understand the differences between native and hybrid app development to make the right choice for your business needs.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    category: 'App Development',
    author: 'HozIT Team',
    date: 'May 3, 2025',
    tags: ['Mobile Apps', 'Development', 'Technology'],
    link: '/blog/mobile-app-development'
  },
  {
    id: 9,
    title: 'Microsoft 365: Transforming Business Productivity',
    excerpt: 'Learn how Microsoft 365 can revolutionize your business operations with integrated cloud-based productivity tools.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Microsoft 365',
    author: 'HozIT Team',
    date: 'May 1, 2025',
    tags: ['Microsoft 365', 'Productivity', 'Cloud'],
    link: '/blog/microsoft-365-productivity'
  },
  {
    id: 10,
    title: 'Network Security: Building a Fortress for Your Data',
    excerpt: 'Essential network security strategies to protect your business from cyber attacks and data breaches in 2025.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'Network Design',
    author: 'HozIT Team',
    date: 'April 28, 2025',
    tags: ['Network Security', 'Data Protection', 'Firewalls'],
    link: '/blog/network-security'
  },
  {
    id: 11,
    title: 'Computer Hardware Buying Guide for South African Businesses',
    excerpt: 'Make informed decisions when purchasing computer hardware with our comprehensive guide tailored for SA businesses.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    category: 'Computer Hardware',
    author: 'HozIT Team',
    date: 'April 25, 2025',
    tags: ['Hardware', 'Buying Guide', 'Business'],
    link: '/blog/computer-hardware-guide'
  },
  {
    id: 12,
    title: 'Software Licensing: Compliance and Cost Management',
    excerpt: 'Navigate the complex world of software licensing while ensuring compliance and optimizing costs for your business.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Software Licensing',
    author: 'HozIT Team',
    date: 'April 22, 2025',
    tags: ['Software', 'Licensing', 'Compliance'],
    link: '/blog/software-licensing'
  },
  {
    id: 13,
    title: 'Remote Work Technology: Setting Up Your Team for Success',
    excerpt: 'Essential technologies and strategies to enable effective remote work for your team while maintaining security.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    category: 'IT Support',
    author: 'HozIT Team',
    date: 'April 20, 2025',
    tags: ['Remote Work', 'Technology', 'Productivity'],
    link: '/blog/remote-work-technology'
  },
  {
    id: 14,
    title: 'Data Backup and Recovery: Your Business Insurance Policy',
    excerpt: 'Why every business needs a robust backup and disaster recovery plan, and how to implement one effectively.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'Cybersecurity',
    author: 'HozIT Team',
    date: 'April 18, 2025',
    tags: ['Backup', 'Recovery', 'Business Continuity'],
    link: '/blog/data-backup-recovery'
  },
  {
    id: 15,
    title: 'Progressive Web Apps: The Future of Mobile Development',
    excerpt: 'Discover how Progressive Web Apps are bridging the gap between web and mobile applications for businesses.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Web Development',
    author: 'HozIT Team',
    date: 'April 15, 2025',
    tags: ['PWA', 'Mobile', 'Web Apps'],
    link: '/blog/progressive-web-apps'
  },
  {
    id: 16,
    title: 'E-commerce Website Optimization for South African Markets',
    excerpt: 'Maximize your online sales with proven e-commerce optimization strategies tailored for the South African market.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Web Development',
    author: 'HozIT Team',
    date: 'April 12, 2025',
    tags: ['E-commerce', 'Optimization', 'South Africa'],
    link: '/blog/ecommerce-optimization'
  },
  {
    id: 17,
    title: 'The Rise of AI in Business: Practical Applications',
    excerpt: 'Explore how artificial intelligence is transforming businesses and identify opportunities for your organization.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: 'Technology Trends',
    author: 'HozIT Team',
    date: 'April 10, 2025',
    tags: ['AI', 'Business', 'Innovation'],
    link: '/blog/ai-in-business'
  },
  {
    id: 18,
    title: 'Website Speed Optimization: Every Second Counts',
    excerpt: 'Learn why website speed matters for your business and implement these proven techniques to boost performance.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    category: 'Web Development',
    author: 'HozIT Team',
    date: 'April 8, 2025',
    tags: ['Performance', 'Speed', 'User Experience'],
    link: '/blog/website-speed-optimization'
  }
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
