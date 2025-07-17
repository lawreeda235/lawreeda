import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed forecasts, interactive maps, and personalized weather alerts using OpenWeather API.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS Grid"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Blog Platform",
      description: "A content management system for bloggers with rich text editing, comment system, and SEO optimization features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "MongoDB", "NextAuth.js", "Markdown"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work and the technologies I'm passionate about
            </p>
          </div>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-16">
              <Card className="gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-bold mb-4 text-accent">
                      {featuredProject.title}
                    </h3>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="gradient-accent">
                        <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 text-accent">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
