
import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ name, rating, review, location }: { name: string; rating: number; review: string; location: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <Quote className="h-8 w-8 text-it-accent mr-3" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{review}"</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "HozIT has been instrumental in our digital transformation. Their web hosting is incredibly reliable, and their support team is always available when we need them. Highly recommend!",
      location: "Cape Town, South Africa"
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "The cybersecurity solutions from HozIT gave us peace of mind. Their team implemented comprehensive security measures that protect our business data 24/7.",
      location: "Johannesburg, South Africa"
    },
    {
      name: "Priya Patel",
      rating: 5,
      review: "Excellent IT support services! HozIT's team is professional, responsive, and always goes the extra mile. They've helped us streamline our operations significantly.",
      location: "Durban, South Africa"
    },
    {
      name: "David Smith",
      rating: 5,
      review: "Their web development team created exactly what we envisioned. The process was smooth, communication was excellent, and the final product exceeded our expectations.",
      location: "Pretoria, South Africa"
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      review: "HozIT's domain registration and hosting services are top-notch. Fast, reliable, and great value for money. Their customer service is outstanding!",
      location: "Port Elizabeth, South Africa"
    },
    {
      name: "Ahmed Hassan",
      rating: 5,
      review: "The Microsoft 365 setup and support from HozIT transformed how our team collaborates. Everything works seamlessly, and their ongoing support is fantastic.",
      location: "Bloemfontein, South Africa"
    },
    {
      name: "Thabo Mthembu",
      rating: 5,
      review: "HozIT's network design solutions revolutionized our business operations. Their expertise in setting up our infrastructure was remarkable, and the performance improvements are outstanding.",
      location: "Rustenburg, South Africa"
    },
    {
      name: "Jennifer Williams",
      rating: 5,
      review: "From initial consultation to final implementation, HozIT delivered beyond our expectations. Their IT support team is knowledgeable, friendly, and always ready to help.",
      location: "Pretoria, South Africa"
    },
    {
      name: "Sipho Kgomo",
      rating: 5,
      review: "Outstanding service! HozIT's cloud solutions have made our business more efficient and secure. Their team's dedication to customer satisfaction is truly impressive.",
      location: "Kimberley, South Africa"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our IT solutions and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={index}
              name={review.name}
              rating={review.rating}
              review={review.review}
              location={review.location}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
          <p className="text-gray-600">
            Based on 200+ reviews from our satisfied clients across South Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
