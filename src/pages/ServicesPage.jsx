import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import { motion } from 'framer-motion';
import { Cloud, Server, Wifi, Network, Activity, Shield } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      name: 'Cloud Support & Infrastructure Management',
      description: 'Comprehensive Level 1/2 support, proactive incident management, and continuous system monitoring to ensure high availability and performance of cloud environments.',
    },
    {
      icon: Server,
      name: 'Windows Server Administration',
      description: 'Expert management of Windows Server environments including ADDS, DNS, Group Policy configuration, and end-to-end server deployment and maintenance.',
    },
    {
      icon: Wifi,
      name: 'Remote Access Solutions',
      description: 'Configuration and management of TSplus and RDP setups, ensuring secure and efficient multi-user environments for remote and hybrid workforces.',
    },
    {
      icon: Network,
      name: 'Network Troubleshooting & Optimization',
      description: 'In-depth network analysis using OSI/TCP-IP models, subnetting, and precise configuration of network devices to resolve connectivity issues and optimize traffic.',
    },
    {
      icon: Activity,
      name: 'System Monitoring & Performance Tracking',
      description: 'Implementation of robust monitoring solutions using Zabbix and Uptime Kuma, including custom alert configuration and detailed performance analysis.',
    },
    {
      icon: Shield,
      name: 'Endpoint Security & Compliance',
      description: 'Deployment and management of Kaspersky Endpoint Security, enforcing strict security policies and conducting continuous compliance monitoring to protect organizational assets.',
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
        <title>Services - Tushar Gupta | Cloud Engineer</title>
        <meta name="description" content="Professional IT infrastructure services including Cloud Support, Windows Server Administration, Network Troubleshooting, and System Monitoring." />
        <meta property="og:title" content="Services - Tushar Gupta | Cloud Engineer" />
        <meta property="og:description" content="Professional IT infrastructure services including Cloud Support and Windows Server Administration." />
        <link rel="canonical" href="https://tushargupta.dev/services" />
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
                IT Infrastructure Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Delivering robust, secure, and scalable IT solutions tailored to optimize your business operations and infrastructure reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ServicesPage;