import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LegalEase helped me understand my tenant rights when my landlord was trying to unfairly increase my rent. The clear explanations empowered me to stand up for myself.",
      author: "Neil Faber",
      title: "Tenant",
      rating: 5
    },
    {
      quote: "As a small business owner, legal documents used to intimidate me. The templates from LegalEase are clear, professional, and easy to customize to my needs.",
      author: "Jack Sequeira",
      title: "Small Business Owner",
      rating: 5
    },
    {
      quote: "The community forum connected me with others who experienced similar employment issues. Their advice, along with the AI assistant, helped me resolve my situation confidently.",
      author: "Gaurav Nile",
      title: "Marketing Professional",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-legalease-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Say
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real people sharing how LegalEase helped them navigate legal challenges with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-subtle border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-200" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-legalease-100 absolute -top-4 -left-4 opacity-50" />
                  <p className="text-gray-700 italic relative z-10">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 