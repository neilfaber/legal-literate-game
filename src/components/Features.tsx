
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Book, Users, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'AI Legal Assistant',
    description: 'Get instant answers to your legal questions in simple language, powered by advanced AI technology.',
    color: 'from-blue-500 to-indigo-600',
    delay: 100,
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Interactive Learning',
    description: 'Learn legal concepts through engaging quizzes, scenarios, and earn rewards as you progress.',
    color: 'from-emerald-500 to-teal-600',
    delay: 200,
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Document Templates',
    description: 'Access and customize professional legal document templates for common needs without legal expertise.',
    color: 'from-orange-400 to-red-500',
    delay: 300,
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community Support',
    description: 'Join a community where you can share experiences, ask questions, and get advice from others.',
    color: 'from-purple-500 to-indigo-600',
    delay: 400,
  },
];

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empowering Citizens With Legal Knowledge
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our platform makes understanding the law simple and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-white rounded-xl p-6 shadow-subtle border border-gray-100 opacity-0 transition-all duration-500"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-gradient-to-r shadow-md",
                feature.color
              )}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
