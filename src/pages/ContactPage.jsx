import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowRight, Loader2 } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!formData.subject.trim()) {
      toast.error('Please enter a subject');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Tushar Gupta - Cloud Engineer</title>
        <meta name="description" content="Get in touch with Tushar Gupta for cloud support, Windows Server administration, and IT infrastructure services." />
        <meta property="og:title" content="Contact Tushar Gupta - Cloud Engineer" />
        <meta property="og:description" content="Get in touch for cloud support and IT infrastructure services." />
        <link rel="canonical" href="https://tushargupta.dev/contact" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10 border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
                Let's Connect
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Looking for reliable cloud support and IT infrastructure services? Reach out to discuss how I can help optimize your systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 space-y-8"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg tech-glow flex-shrink-0">
                    <img 
                      src="https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/00a80f03e5cffd7c59ef8682db6eae19.jpg" 
                      alt="Tushar Gupta - Contact" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Direct Contact</h2>
                    <p className="text-muted-foreground">Reach out directly via email or LinkedIn.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:tushargupta05@outlook.com"
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:tech-glow hover:-translate-y-1 transition-all duration-300 group"
                    aria-label="Send an email to Tushar Gupta"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Email</p>
                      <p className="text-foreground font-medium break-all">tushargupta05@outlook.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/in/tushar-gupta-2nov2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:tech-glow hover:-translate-y-1 transition-all duration-300 group"
                    aria-label="Visit Tushar Gupta's LinkedIn profile"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">LinkedIn</p>
                      <p className="text-foreground font-medium break-all">linkedin.com/in/tushar-gupta-2nov2005</p>
                    </div>
                  </a>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8 mt-8 shadow-lg tech-glow">
                  <h3 className="text-xl font-bold mb-3">Ready to optimize your infrastructure?</h3>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">
                    Whether you need Level 1/2 support, Windows Server administration, or comprehensive system monitoring, I'm here to help.
                  </p>
                  <Button variant="secondary" className="w-full group" onClick={() => document.getElementById('name').focus()}>
                    Send a Message
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <Card className="glass-panel border-border/50 shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-semibold">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-background/50 focus:bg-background transition-colors"
                            aria-required="true"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-semibold">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-background/50 focus:bg-background transition-colors"
                            aria-required="true"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-semibold">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="How can I help you?"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-background/50 focus:bg-background transition-colors"
                          aria-required="true"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-semibold">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project or IT support needs..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="bg-background/50 focus:bg-background transition-colors resize-none"
                          aria-required="true"
                          disabled={isSubmitting}
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full transition-all duration-300 active:scale-[0.98] text-base h-12 tech-glow"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ContactPage;