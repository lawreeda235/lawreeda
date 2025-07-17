import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lawrence@example.com",
      link: "mailto:lawrence@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 text-accent">
                  Get In Touch
                </h3>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and innovation. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="gradient-card border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <info.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-muted-foreground hover:text-accent transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-muted-foreground">{info.value}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="gradient-card rounded-lg p-6 shadow-card">
                <h4 className="font-display text-lg font-semibold mb-4 text-accent">
                  Response Time
                </h4>
                <p className="text-foreground/80">
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to reach out via phone or mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="gradient-card border-border/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-accent">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary border-border/20 focus:border-accent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-secondary border-border/20 focus:border-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-secondary border-border/20 focus:border-accent resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;