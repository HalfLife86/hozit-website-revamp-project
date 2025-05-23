
import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const features = [
  {
    title: "Tailored SEO Strategies",
    description: "Every business is unique, and so are its SEO needs. Our experienced SEO specialists take the time to understand your business objectives, target audience, and industry landscape to develop tailored SEO strategies that deliver tangible results. Whether you're looking to improve your search engine rankings, increase website traffic, or boost conversions, we craft custom SEO solutions that align with your goals and maximize your ROI."
  },
  {
    title: "On-Page Optimization",
    description: "A strong foundation is essential for SEO success, and that begins with on-page optimization. Our team conducts comprehensive audits of your website to identify areas for improvement, including keyword research, meta tags optimization, content optimization, and technical SEO enhancements. By optimizing your website's structure and content, we ensure that search engines can crawl, index, and rank your pages effectively, driving organic traffic and visibility."
  },
  {
    title: "Off-Page Optimization",
    description: "Off-page optimization plays a crucial role in establishing your website's authority and credibility in the eyes of search engines. Our off-page SEO strategies focus on building high-quality backlinks from authoritative websites, optimizing your online presence across directories and social media platforms, and fostering positive reviews and mentions from satisfied customers. By enhancing your website's off-page factors, we increase its visibility and relevance in search engine results, driving organic traffic and boosting your online reputation."
  },
  {
    title: "Content Marketing",
    description: "Content is king in the world of SEO, and our content marketing services are designed to fuel your online visibility and engagement. We create compelling, relevant, and optimized content that resonates with your target audience and addresses their needs and pain points. From blog posts and articles to infographics and videos, we leverage a variety of content formats to attract, engage, and convert your prospects into customers. Our content marketing strategies not only drive organic traffic to your website but also establish your brand as a trusted authority in your industry."
  },
  {
    title: "Local SEO",
    description: "For businesses targeting local customers, local SEO is essential for driving foot traffic and generating leads. Our local SEO services focus on optimizing your website for location-based keywords, creating and optimizing Google My Business listings, managing online reviews and citations, and implementing geotargeted advertising strategies. By enhancing your visibility in local search results, we help you connect with nearby customers who are actively searching for your products or services, driving traffic to your physical location and increasing your revenue."
  },
  {
    title: "Google Ads Management",
    description: "In addition to organic search engine optimization, we offer Google Ads management services to help you reach your target audience and drive immediate results. Our certified Google Ads specialists create and optimize targeted ad campaigns that appear at the top of search engine results pages (SERPs) and across Google's vast network of websites and platforms. Whether you're looking to increase website traffic, generate leads, or boost sales, our Google Ads management services help you maximize your advertising budget and achieve your business goals."
  }
];

const SEOFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFeatures;
