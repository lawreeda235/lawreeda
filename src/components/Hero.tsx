import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Lawrence Edaria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Lawrence</span>{' '}
              <span className="text-gradient">Edaria</span>
            </h1>
            
            <h2 className="font-display text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left">
              Software Developer • Tech Enthusiast • Problem Solver
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl leading-relaxed animate-fade-in [animation-delay:0.3s] opacity-0 fill-mode-forwards">
              Passionate about creating innovative solutions and building exceptional digital experiences. 
              I transform ideas into reality through clean code and thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:0.6s] opacity-0 fill-mode-forwards">
              <Button 
                size="lg" 
                className="gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 font-semibold"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex space-x-6 animate-fade-in [animation-delay:0.9s] opacity-0 fill-mode-forwards">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lawrence@example.com"
                 className="text-muted-foreground hover:text-accent transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent animate-glow-pulse"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;