
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-legalease-50 rounded-bl-[100px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-legalease-50 rounded-tr-[100px] opacity-60" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "transition-all transform duration-700",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 border border-legalease-100">
                Legal knowledge for everyone
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              Understand Your Rights in
              <span className="text-legalease-600 ml-2">Simple Terms</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-balance leading-relaxed">
              Making legal literacy accessible and engaging for every citizen through interactive learning, AI assistance, and community knowledge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/chat"
                className="w-full sm:w-auto px-6 py-3 bg-legalease-600 text-white rounded-full 
                font-medium transition-all hover:shadow-lg hover:bg-legalease-700 
                focus:outline-none focus:ring-2 focus:ring-legalease-500 focus:ring-offset-2 
                button-shine text-center"
              >
                Ask Legal Questions
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3 border border-gray-200 hover:border-gray-300 
                rounded-full font-medium text-gray-700 transition-all 
                hover:shadow hover:bg-white 
                focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 text-center"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className={cn(
            "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}>
            <a
              href="#features"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
              bg-white/80 backdrop-blur-sm shadow-subtle border border-gray-100
              text-gray-500 hover:text-legalease-600 transition-colors animate-float"
              aria-label="Scroll to features"
            >
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
