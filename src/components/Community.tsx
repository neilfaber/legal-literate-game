import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, User, Users, MessageCircle, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Post {
  id: number;
  author: string;
  authorType: 'user' | 'expert';
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  time: string;
  hasLiked?: boolean;
}

const samplePosts: Post[] = [
  {
    id: 1,
    author: 'Sarah Johnson',
    authorType: 'expert',
    title: 'Understanding tenant rights during renovation',
    content: "My landlord wants to renovate the apartment while I'm still living there. What rights do I have regarding notice, rent reduction, or temporary housing?",
    category: 'Housing',
    likes: 24,
    replies: 8,
    time: '2 hours ago',
  },
  {
    id: 2,
    author: 'Michael Chen',
    authorType: 'user',
    title: 'Dispute with online retailer about return policy',
    content: "I purchased a product online that arrived damaged. The retailer is refusing to accept my return, stating their policy doesn't cover \"minor imperfections.\" How can I effectively pursue this?",
    category: 'Consumer Rights',
    likes: 17,
    replies: 12,
    time: '5 hours ago',
  },
  {
    id: 3,
    author: 'Priya Patel',
    authorType: 'expert',
    title: 'Employment contract termination question',
    content: 'My company is asking me to sign a new employment agreement with significantly different terms. If I refuse, can they terminate me? What are my options?',
    category: 'Employment',
    likes: 31,
    replies: 14,
    time: '1 day ago',
  },
];

const categories = ['All', 'Housing', 'Employment', 'Consumer Rights', 'Family Law', 'Criminal Law'];

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'Housing'
  });

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        if (post.hasLiked) {
          return { ...post, likes: post.likes - 1, hasLiked: false };
        } else {
          return { ...post, likes: post.likes + 1, hasLiked: true };
        }
      }
      return post;
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPostObj: Post = {
      id: posts.length + 1,
      author: 'You', // This would come from user authentication in a real app
      authorType: 'user',
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      likes: 0,
      replies: 0,
      time: 'Just now'
    };
    
    setPosts([newPostObj, ...posts]);
    setNewPost({ title: '', content: '', category: 'Housing' });
    setIsFormOpen(false);
  };

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-legalease-50 text-legalease-700 mb-4">
              Community Forum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn From Shared Legal Experiences
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our community where you can share experiences, ask questions, and get advice from peers and legal experts.
            </p>
          </div>

          {/* New Question Form */}
          {isFormOpen && (
            <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden mb-8 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-legalease-600" />
                  <h3 className="text-xl font-semibold">Ask a Question</h3>
                </div>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Question Title
                    </label>
                    <input 
                      type="text" 
                      id="title"
                      name="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      placeholder="E.g., Question about rental agreement terms"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legalease-500 focus:border-legalease-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Question
                    </label>
                    <textarea 
                      id="content"
                      name="content"
                      value={newPost.content}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your legal question or situation in detail..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legalease-500 focus:border-legalease-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select 
                      id="category"
                      name="category"
                      value={newPost.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-legalease-500 focus:border-legalease-500"
                    >
                      {categories.slice(1).map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-3">
                  <button 
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-legalease-600 text-white rounded-lg hover:bg-legalease-700 transition-colors"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-subtle border border-gray-100 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-legalease-600" />
                  <h3 className="text-xl font-semibold">Community Discussions</h3>
                </div>
                {!isFormOpen && (
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center space-x-1 px-3 py-1 bg-legalease-50 text-legalease-700 rounded-lg hover:bg-legalease-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="text-sm font-medium">Ask a Question</span>
                  </button>
                )}
              </div>
              
              <div className="flex overflow-x-auto pb-2 mb-2 scrollbar-thin">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button 
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors",
                        category === activeCategory
                          ? "bg-legalease-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {filteredPosts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-legalease-100 flex items-center justify-center text-legalease-700">
                        <User className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="font-medium text-gray-900">{post.author}</span>
                        {post.authorType === 'expert' && (
                          <span className="ml-2 px-2 py-0.5 bg-legalease-50 text-legalease-700 text-xs rounded-full">
                            Legal Expert
                          </span>
                        )}
                        <span className="ml-2 text-xs text-gray-500">{post.time}</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                      <p className="text-gray-600 mb-4">{post.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                            {post.category}
                          </span>
                          <button 
                            onClick={() => handleLike(post.id)}
                            className={cn(
                              "flex items-center space-x-1 text-sm",
                              post.hasLiked ? "text-legalease-600" : "text-gray-500 hover:text-gray-700"
                            )}
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.replies} replies</span>
                          </button>
                        </div>
                        <button className="text-sm font-medium text-legalease-600 hover:text-legalease-700">
                          View Discussion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-center">
              <button className="px-5 py-2 border border-legalease-200 text-legalease-600 rounded-lg hover:bg-legalease-50 transition-colors">
                See More Discussions
              </button>
            </div>
          </div>

          <div className="bg-legalease-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-legalease-800">Have a legal question?</h3>
              <p className="text-legalease-600">Join the conversation and get help from our community.</p>
            </div>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-legalease-600 text-white px-6 py-3 rounded-lg hover:bg-legalease-700 transition-colors shadow-sm"
            >
              Start a Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
