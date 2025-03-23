
import React, { useState } from 'react';
import { MessageSquare, Users, Clock, PlusCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';

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

const questionSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  category: z.string().min(1, "Please select a category"),
  details: z.string().min(20, "Details must be at least 20 characters").max(2000, "Details must be less than 2000 characters"),
});

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: "",
      category: "",
      details: "",
    },
  });
  
  const onSubmit = (values: z.infer<typeof questionSchema>) => {
    toast({
      title: "Question Submitted",
      description: "Your question has been submitted to the community.",
    });
    
    // Reset the form after submission
    form.reset();
    
    // Switch to discussions tab to show all questions including the new one
    setActiveTab("discussions");
  };
  
  const categories = [
    "Housing", "Employment", "Family Law", "Consumer Rights", 
    "Small Claims", "Traffic", "Immigration", "Contracts", "Other"
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="discussions" className="text-base">
                <MessageSquare className="mr-2 h-4 w-4" /> Discussions
              </TabsTrigger>
              <TabsTrigger value="ask" className="text-base">
                <PlusCircle className="mr-2 h-4 w-4" /> Ask a Question
              </TabsTrigger>
              <TabsTrigger value="experts" className="text-base">
                <Users className="mr-2 h-4 w-4" /> Find Experts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
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
                      <Button className="bg-legalease-600 text-white hover:bg-legalease-700 w-full sm:w-auto">
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
                        {categories.map((category) => (
                          <span key={category} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-legalease-50 rounded-xl overflow-hidden mt-6 p-6">
                    <h3 className="text-lg font-bold text-legalease-700 mb-3">Join Our Community</h3>
                    <p className="text-sm text-gray-600 mb-4">Connect with others facing similar legal challenges and share experiences.</p>
                    <Link to="/auth">
                      <Button className="w-full bg-legalease-600 text-white hover:bg-legalease-700">
                        Create an Account
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ask" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">Ask a Legal Question</h2>
                  <p className="text-gray-600 mt-2">Get answers from qualified legal professionals and the community</p>
                </div>
                
                <div className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Question Title</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., How do I respond to an eviction notice?" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                {...field}
                              >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                  <option key={category} value={category}>
                                    {category}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Question Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your question in detail. Include relevant information and be specific about what you need help with." 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit"
                          className="bg-legalease-600 hover:bg-legalease-700 text-white"
                        >
                          Submit Question
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="experts" className="mt-0">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900">Find Legal Experts</h2>
                  <p className="text-gray-600 mt-2">Connect with qualified legal professionals in various practice areas</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.slice(0, 6).map((category) => (
                      <div key={category} className="border rounded-xl p-5 hover:border-legalease-300 transition-colors">
                        <div className="flex items-center mb-3">
                          <div className="bg-legalease-100 p-2 rounded-lg mr-3">
                            <HelpCircle className="h-5 w-5 text-legalease-600" />
                          </div>
                          <h3 className="text-lg font-medium">{category} Experts</h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                          Connect with specialists in {category.toLowerCase()} law to get professional advice.
                        </p>
                        <Button variant="outline" className="w-full text-legalease-600 border-legalease-200 hover:bg-legalease-50">
                          View Experts
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="text-legalease-600 border-legalease-200 hover:bg-legalease-50">
                      View All Categories
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Community;
