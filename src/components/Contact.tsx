import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Download,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { submitContactForm } from '../utils/analytics';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.error || "Failed to send message. Please try again or contact me directly.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rakshitbisht7@gmail.com',
      href: 'mailto:rakshitbisht7@gmail.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7579202216',
      href: 'tel:+917579202216',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ranikhet, India',
      href: 'https://maps.google.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rakshitbisht7',
      color: 'text-gray-900',
      hoverColor: 'hover:text-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rakshit-bisht-9b386a255',
      color: 'text-blue-600',
      hoverColor: 'hover:text-blue-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rakshitbisht7@gmail.com',
      color: 'text-red-600',
      hoverColor: 'hover:text-red-500'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="text-blue-600" size={24} />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className="border-gray-300 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`${info.color}`} size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{info.label}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} ${social.hoverColor} bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 text-white shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">Download Resume</h3>
              <p className="text-white/90 mb-4">
                Get a detailed overview of my skills, experience, and achievements.
              </p>
              <Button
                className="bg-white text-blue-600 hover:bg-white/90 transition-colors"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="border-t border-gray-300 pt-8">
            <p className="text-gray-600">
              © 2025 Rakshit Singh Bisht. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}