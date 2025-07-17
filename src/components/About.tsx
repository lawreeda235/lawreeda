import { Code, Heart, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to solve complex problems."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely passionate about technology and its power to make a positive impact."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-accent">
                Building the Future, One Line at a Time
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With a strong foundation in software development and a keen eye for detail, 
                I specialize in creating robust web applications and innovative solutions. 
                My journey in technology has been driven by curiosity and a commitment to excellence.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe that great software isn't just about functionality—it's about creating 
                experiences that users love and developers can maintain. Every project is an 
                opportunity to learn, grow, and push the boundaries of what's possible.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="relative">
              <div className="gradient-card rounded-lg p-8 shadow-card">
                <h4 className="font-display text-xl font-semibold mb-4 text-accent">
                  What Drives Me
                </h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Creating solutions that make a difference
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Continuous learning and skill development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Collaborating with talented teams
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Building user-centric applications
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-accent" />
                  </div>
                  <h4 className="font-display text-xl font-semibold mb-3 text-accent">
                    {value.title}
                  </h4>
                  <p className="text-foreground/80">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;