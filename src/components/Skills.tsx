import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { 
  Code, 
  Database, 
  GitBranch,
  Server,
  Globe,
  Layout,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: GitBranch,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'CI/CD', level: 78 },
      ],
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind CSS', 'Git',
    'Jest', 'Figma', 'Express.js', 'Django'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies and frameworks to build robust, scalable applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`${category.color}`} size={28} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-white hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer shadow-sm"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Web Development Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Globe,
              title: 'Full Stack Web Development',
              description: 'Complete web applications from frontend to backend',
              color: 'text-blue-600',
              bgColor: 'bg-blue-50'
            },
            {
              icon: Layout,
              title: 'Responsive Design',
              description: 'Mobile-first, cross-platform compatible interfaces',
              color: 'text-green-600',
              bgColor: 'bg-green-50'
            },
            {
              icon: Zap,
              title: 'Performance Optimization',
              description: 'Fast loading, optimized web applications',
              color: 'text-purple-600',
              bgColor: 'bg-purple-50'
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 ${skill.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`${skill.color}`} size={32} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}