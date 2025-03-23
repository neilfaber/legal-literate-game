
import React from 'react';
import { MessageSquare, Users, ThumbsUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const discussionTopics = [
  {
    id: 1,
    title: "Understanding Tenant Rights in California",
    author: "LegalEagle42",
    replies: 24,
    views: 189,
    lastActive: "2 hours ago",
    category: "Housing"
  },
  {
    id: 2,
    title: "Small Claims Court Process Explained",
    author: "CourtSavvy",
    replies: 18,
    views: 142,
    lastActive: "5 hours ago",
    category: "Courts"
  },
  {
    id: 3,
    title: "Dealing with Employment Discrimination",
    author: "WorkRightsAdv",
    replies: 31,
    views: 235,
    lastActive: "1 day ago",
    category: "Employment"
  },
  {
    id: 4,
    title: "How to Handle a Traffic Ticket Dispute",
    author: "RoadRules101",
    replies: 15,
    views: 127,
    lastActive: "3 days ago",
    category: "Traffic"
  }
];

const Community = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-7 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Popular Discussions</h2>
                <p className="text-gray-600 mt-2">Join conversations about common legal questions and challenges</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {discussionTopics.map((topic) => (
                  <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-legalease-100 text-legalease-600 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-legalease-700 hover:text-legalease-600 transition-colors">
                          {topic.title}
                        </h3>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span className="bg-legalease-50 text-legalease-700 px-2 py-1 rounded-full text-xs">
                            {topic.category}
                          </span>
                          <span className="mx-2">•</span>
                          <span>Started by {topic.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          <span>{topic.replies} replies</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{topic.views} views</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{topic.lastActive}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-100 text-center">
                <Button className="bg-legalease-600 text-white hover:bg-legalease-700">
                  View All Discussions
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Community Stats</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Members</span>
                    <span className="font-medium">3,542</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Discussions</span>
                    <span className="font-medium">1,275</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Comments</span>
                    <span className="font-medium">8,933</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Online Now</span>
                    <span className="font-medium">127</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Housing</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Employment</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Family Law</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Consumer Rights</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Small Claims</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Traffic</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Immigration</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Contracts</span>
                </div>
              </div>
            </div>
            
            <div className="bg-legalease-50 rounded-xl overflow-hidden mt-6 p-6">
              <h3 className="text-lg font-bold text-legalease-700 mb-3">Join Our Community</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with others facing similar legal challenges and share experiences.</p>
              <Button className="w-full bg-legalease-600 text-white hover:bg-legalease-700">
                Create an Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
