import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './imgErrorHandle/ImageWithFallback';
import { trackProjectView } from '../utils/analytics';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleProjectLink = (url: string, projectIdToTrack: number, projectTitle: string, type: 'demo' | 'github') => {
    trackProjectView(projectIdToTrack.toString(), projectTitle);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projects = [
    {
      id: 1,
      title: 'Game Hub',
      description: 'Developed an interactive website to search and explore various games, with a clean user interface using React.js. Integrated search functionality to filter games based on user preferences.',
      image: 'https://images.unsplash.com/photo-1695074185991-136f993ad998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwc2V0dXB8ZW58MXx8fHwxNzYyMDM5NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      category: 'frontend',
      github: 'https://github.com/rakshitbisht7/game-hub.git',
      demo: 'https://game-hub-two-virid.vercel.app/',
    },
    {
      id: 2,
      title: 'LUXE (E-Commerce Site)',
      description: 'A modern e-commerce website built using React, TypeScript, and Tailwind CSS for the frontend. Backend planned with the MERN Stack for database, authentication, and API management.',
      image: 'https://images.unsplash.com/photo-1758429633418-ac1375749fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcGluZyUyMGJvdXRpcXVlfGVufDF8fHx8MTc2MjA1OTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'MongoDB', 'Express.js', 'Node.js', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/rakshitbisht7/luxe-ecommerce.git',
      demo: 'https://luxe-ecommerce-eta.vercel.app/',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio website built with React.js and Node.js, featuring smooth animations and modern UI design.',
      image: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA4NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
      category: 'fullstack',
      github: 'https://www.github.com',
      demo: '',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work across different technologies and platforms
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                  : 'hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <Filter size={16} className="mr-2" />
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                {/* Project Image */}
                {project.image && (
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white rounded-full px-4"
                        onClick={() => handleProjectLink(project.github, project.id, project.title, 'github')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4"
                        onClick={() => handleProjectLink(project.demo, project.id, project.title, 'demo')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                )}

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-gray-50"
                      onClick={() => handleProjectLink(project.github, project.id, project.title, 'github')}
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                      onClick={() => handleProjectLink(project.demo, project.id, project.title, 'demo')}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github size={18} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}