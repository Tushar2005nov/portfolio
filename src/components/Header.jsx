import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group" aria-label="Home">
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:opacity-80">
              Tushar Gupta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-primary font-semibold bg-primary/10 tech-glow'
                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border/50">
              <Link to="/contact">
                <Button className="font-medium tech-glow transition-all duration-300 hover:scale-105">Contact Me</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-panel">
              <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-lg transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-primary font-semibold bg-primary/10 border-l-2 border-primary'
                          : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                      }`}
                      aria-current={isActive(link.path) ? 'page' : undefined}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-border/50">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full text-lg tech-glow">Contact Me</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;