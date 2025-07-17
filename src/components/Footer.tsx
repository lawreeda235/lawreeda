import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:lawrence@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-display font-bold text-xl text-accent mb-4">
                Lawrence Edaria
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Software Developer passionate about creating innovative solutions 
                and building exceptional digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-foreground/70 hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-foreground/70 mt-4 text-sm">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foreground/60 text-sm">
                © {currentYear} Lawrence Edaria. All rights reserved.
              </p>
              <p className="text-foreground/60 text-sm flex items-center mt-4 md:mt-0">
                Made with <Heart size={14} className="mx-1 text-accent" /> and React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;