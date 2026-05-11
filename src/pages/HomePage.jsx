import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Network, Activity, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';

const HomePage = () => {
  const expertiseAreas = [
    {
      icon: ShieldCheck,
      title: 'Cloud Support',
      description: 'Level 1/2 support, incident management, and timely resolution of cloud infrastructure issues.',
    },
    {
      icon: Server,
      title: 'Windows Server',
      description: 'Administration of ADDS, DNS, Group Policy, and comprehensive server deployment.',
    },
    {
      icon: Network,
      title: 'Network Troubleshooting',
      description: 'Deep understanding of OSI/TCP-IP models, subnetting, and network device configuration.',
    },
    {
      icon: Activity,
      title: 'System Monitoring',
      description: 'Proactive infrastructure monitoring using Zabbix and Uptime Kuma to ensure high availability.',
    },
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex flex-col">
      <Helmet>
        <title>Tushar Gupta - Cloud Engineer & IT Infrastructure Expert</title>
        <meta name="description" content="Portfolio of Tushar Gupta, Cloud Support Engineer specializing in Windows Server, Network Troubleshooting, and System Monitoring." />
        <meta property="og:title" content="Tushar Gupta - Cloud Engineer & IT Infrastructure Expert" />
        <meta property="og:description" content="Delivering reliable cloud solutions and IT infrastructure management." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/00a80f03e5cffd7c59ef8682db6eae19.jpg" />
        <link rel="canonical" href="https://tushargupta.dev" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 tech-glow">
                Available for new opportunities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
                Cloud Support Engineer & <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">IT Infrastructure Specialist</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                Delivering reliable cloud solutions and IT infrastructure management. Dedicated to optimizing system performance, ensuring security, and providing exceptional technical support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/portfolio">
                  <Button size="lg" className="w-full sm:w-auto group transition-all duration-300 active:scale-[0.98] text-base h-12 px-8 tech-glow">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto transition-all duration-300 active:scale-[0.98] text-base h-12 px-8 glass-panel hover:bg-primary/10 hover:text-primary">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-pulse blur-xl opacity-50"></div>
                <img
                  src="https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/00a80f03e5cffd7c59ef8682db6eae19.jpg"
                  alt="Tushar Gupta, Cloud Engineer and IT Infrastructure Expert"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl tech-glow"
                  loading="eager"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-muted/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Core Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive IT infrastructure management and cloud support services designed to keep your business running smoothly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:tech-glow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default HomePage;