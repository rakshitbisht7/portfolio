# Portfolio Website - Tech Stack & Features

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI library with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS v4.0** - Utility-first CSS framework for responsive design
- **Motion (Framer Motion)** - Advanced animation library for smooth transitions
- **Lucide React** - Beautiful icon library

### **UI Components**
- **shadcn/ui** - High-quality, accessible component library including:
  - Cards, Buttons, Inputs, Textareas
  - Tabs, Badges, Progress bars
  - Toast notifications (Sonner)
  - Forms with validation
  - Tables for admin dashboard

### **Backend**
- **Supabase Edge Functions** - Serverless backend powered by Deno
- **Hono** - Lightweight, fast web framework for edge computing
- **Supabase Database** - PostgreSQL-based database with key-value store
- **RESTful API** - Clean API architecture with proper routing

### **Deployment & Hosting**
- **Supabase** - Integrated backend-as-a-service platform
- **Edge Computing** - Fast, globally distributed backend

---

## ✨ Key Features

### **1. Hero Section**
- Animated background with gradient overlays
- Dynamic floating particles animation
- Professional introduction with social media links
- Smooth scroll navigation
- Responsive profile showcase

### **2. About Section**
- Professional profile photo
- Personal introduction and bio
- Technology expertise highlights
- Clean, modern card-based layout

### **3. Skills Showcase**
- Three categories: Frontend, Backend, and Tools
- Animated progress bars showing proficiency levels
- Visual skill representation
- Organized by technology domain

### **4. Projects Portfolio**
- **Filterable Project Gallery** - Filter by category (All, Web Apps, Full Stack, Mobile)
- **Project Cards** with:
  - High-quality project images
  - Technology tags/badges
  - Live demo and GitHub repository links
  - Detailed descriptions
- **Analytics Tracking** - Automatic project view tracking
- **Three Featured Projects**:
  - Game Hub (React game search platform)
  - LUXE E-Commerce Site (Full-stack shopping platform)
  - Portfolio Website (This project)

### **5. Contact Form**
- **Functional Contact Form** with:
  - Name, Email, Subject, Message fields
  - Form validation
  - Backend integration for submissions
  - Success/Error toast notifications
- **Contact Information** displaying:
  - Email address
  - Phone number
  - Location
- **Social Media Links**:
  - GitHub
  - LinkedIn
  - Email

### **6. Admin Dashboard** (`/admin`)
- **Contact Submissions Management**:
  - View all contact form submissions
  - Submission details (name, email, subject, message)
  - Timestamp tracking
  - Status badges
- **Project Analytics**:
  - Total project views counter
  - Individual project view statistics
  - First and last viewed timestamps
  - Visual analytics with charts
- **Dashboard Statistics**:
  - Total contacts received
  - Total project views
  - Real-time data refresh

### **7. Navigation**
- **Fixed Navigation Bar** with:
  - Transparent on top, solid on scroll
  - Smooth scroll to sections
  - Mobile-responsive hamburger menu
  - Desktop horizontal menu
- **Active state management**
- **Mobile-first responsive design**

---

## 🏗️ Architecture & Organization

### **Component Structure**
```
components/
├── Core Pages (Hero, About, Skills, Projects, Contact)
├── Admin Dashboard (Analytics & Contact Management)
├── Utilities (ErrorBoundary, SEO, LoadingSpinner)
├── UI Components (shadcn/ui library)

```

### **Backend API Routes**
- `POST /make-server-1a91da27/contact` - Submit contact form
- `POST /make-server-1a91da27/track-project-view` - Track project views
- `GET /make-server-1a91da27/admin/contacts` - Get all contact submissions
- `GET /make-server-1a91da27/admin/analytics` - Get project analytics
- `GET /make-server-1a91da27/health` - Health check endpoint

### **Database Schema**
- **Key-Value Store** for flexible data storage:
  - Contact submissions (`contact_*` keys)
  - Project views (`project_views_*` keys)
  - Project info (`project_info_*` keys)
  - Submission lists (`contact_submissions`)

---

## 🎨 Design Features

### **Visual Design**
- Professional color palette (Blues, Dark Grays, Teal/Orange accents)
- Gradient backgrounds and overlays
- Smooth animations and transitions
- Hover effects on interactive elements
- Glassmorphism effects (backdrop blur)

### **Responsive Design**
- Mobile-first approach
- Breakpoints for tablet and desktop
- Adaptive layouts for all screen sizes
- Touch-friendly mobile navigation

### **Accessibility**
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

---

## 🚀 Performance & Optimization

### **Code Optimization**
- React component memoization
- Lazy loading where appropriate
- Centralized analytics utilities
- Error boundary for graceful error handling
- Loading states for better UX

### **SEO Optimization**
- Dynamic meta tags
- Open Graph tags for social sharing
- Twitter Card integration
- Canonical URLs
- Descriptive page titles and descriptions

### **Error Handling**
- Global error boundary component
- Try-catch blocks in API calls
- User-friendly error messages
- Console logging for debugging
- Toast notifications for user feedback

---

## 🔐 Security Features

- Environment variables for sensitive data
- CORS configuration
- Authorization headers for API requests
- Service role key protection (backend only)
- Secure external link handling (`noopener,noreferrer`)

---

## 📊 Analytics & Tracking

- Project view tracking
- Contact form submission tracking
- Admin dashboard with real-time statistics
- Timestamp tracking for all interactions
- Analytics persist across sessions

---

## 🎯 Production Ready

- ✅ Error boundaries for crash prevention
- ✅ SEO meta tags for discoverability
- ✅ Loading spinners for better UX
- ✅ Centralized constants and utilities
- ✅ Clean code organization
- ✅ Type safety with TypeScript
- ✅ Responsive across all devices
- ✅ Professional animations and transitions
- ✅ Backend integration with Supabase
- ✅ Admin dashboard for management

---

## 📦 External Packages

- `motion/react` (v11+) - Animation library
- `lucide-react` - Icon library
- `sonner@2.0.3` - Toast notifications
- `@supabase/supabase-js@2` - Supabase client
- `hono` - Web framework for edge functions
- `npm:hono/cors` - CORS middleware
- `npm:hono/logger` - Request logging

---

## 🌐 Live Links

- **GitHub**: https://github.com/rakshitbisht7
- **LinkedIn**: https://linkedin.com/in/rakshit-bisht-9b386a255
- **Email**: rakshitbisht7@gmail.com

---

*Built with ❤️ by Rakshit Bisht*
