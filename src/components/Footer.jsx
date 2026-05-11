import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Tushar Gupta
            </span>
            <p className="mt-2 text-sm font-medium text-foreground/80">
              Cloud Support Engineer
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Delivering reliable cloud solutions and IT infrastructure management for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick links</span>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary mr-0 transition-all duration-300 group-hover:w-2 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</span>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:tushargupta05@outlook.com"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label="Email Tushar Gupta"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                tushargupta05@outlook.com
              </a>
              <a
                href="https://linkedin.com/in/tushar-gupta-2nov2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label="Tushar Gupta's LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                aria-label="Tushar Gupta's GitHub Profile"
              >
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Tushar Gupta. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;