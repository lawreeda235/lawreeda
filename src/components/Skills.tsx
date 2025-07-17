import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Python", level: 82 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 78 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Linux", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-6 text-accent text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl font-semibold mb-8 text-accent">
              Always Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["AI/ML", "Cloud Architecture", "DevOps", "Mobile Development", "Blockchain"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-secondary rounded-lg text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;