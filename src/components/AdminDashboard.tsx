import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Mail, 
  BarChart3, 
  Users, 
  Eye, 
  Calendar,
  RefreshCw,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { LoadingSpinner } from './LoadingSpinner';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: string;
}

interface ProjectAnalytics {
  projectId: number;
  title: string;
  views: number;
  firstViewed?: string;
  lastViewed?: string;
}

export function AdminDashboard() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [projectAnalytics, setProjectAnalytics] = useState<ProjectAnalytics[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContactSubmissions = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1a91da27/admin/contacts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      const result = await response.json();
      if (result.success) {
        setContactSubmissions(result.submissions);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Failed to fetch contact submissions:', error);
      setError('Failed to load contact submissions');
    }
  };

  const fetchProjectAnalytics = async () => {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1a91da27/admin/analytics`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      const result = await response.json();
      if (result.success) {
        setProjectAnalytics(result.analytics);
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Failed to fetch project analytics:', error);
      setError('Failed to load project analytics');
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    await Promise.all([fetchContactSubmissions(), fetchProjectAnalytics()]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const totalViews = projectAnalytics.reduce((sum, project) => sum + project.views, 0);
  const totalContacts = contactSubmissions.length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Portfolio Dashboard</h1>
              <p className="text-gray-600 mt-2">Monitor contact submissions and project analytics</p>
            </div>
            <Button 
              onClick={loadData} 
              className="bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              <RefreshCw className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} size={16} />
              Refresh
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Contacts</p>
                    <p className="text-3xl font-bold text-blue-600">{totalContacts}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Project Views</p>
                    <p className="text-3xl font-bold text-green-600">{totalViews}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <Eye className="text-green-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <p className="text-3xl font-bold text-purple-600">{projectAnalytics.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-purple-600" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Mail size={16} />
              Contact Submissions
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 size={16} />
              Project Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {contactSubmissions.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No contact submissions yet</p>
                ) : (
                  <div className="space-y-4">
                    {contactSubmissions.map((submission) => (
                      <motion.div
                        key={submission.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">{submission.subject}</h3>
                            <p className="text-sm text-gray-600">
                              From: {submission.name} ({submission.email})
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">
                              {submission.status}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {formatDate(submission.timestamp)}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded">
                          {submission.message}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project View Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                {projectAnalytics.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No project analytics data yet</p>
                ) : (
                  <div className="space-y-4">
                    {projectAnalytics.map((project) => (
                      <motion.div
                        key={project.projectId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{project.title}</h3>
                          <Badge className="bg-blue-100 text-blue-800">
                            {project.views} views
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          {project.firstViewed && (
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              First viewed: {formatDate(project.firstViewed)}
                            </div>
                          )}
                          {project.lastViewed && (
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              Last viewed: {formatDate(project.lastViewed)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}