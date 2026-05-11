import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, Cloud, Server, Network, Database, Shield } from 'lucide-react';

const AboutPage = () => {
  const strengths = [
    'Time management and multitasking',
    'Good communication skills',
    'Quick learning ability',
    'Strong troubleshooting and problem-solving skills'
  ];

  const education = [
    {
      institution: 'Yenepoya University',
      degree: 'Bachelor of Computer Applications',
      period: 'July 2024 – July 2027',
      location: 'Mangalore, KA'
    },
    {
      institution: 'Jetking',
      degree: 'Diploma in Cloud Computing (JK DCC)',
      period: 'May 2024 – July 2025',
      location: 'South Extension, DL'
    },
    {
      institution: 'NIOS',
      degree: 'Higher Senior Secondary',
      period: '2023',
      location: 'Noida, Delhi'
    }
  ];

  const skillCategories = [
    {
      icon: Cloud,
      category: 'Cloud & Virtualization',
      skills: ['VMware', 'VirtualBox', 'Remote Access & Virtualization', 'TSplus', 'RDP']
    },
    {
      icon: Server,
      category: 'Operating Systems',
      skills: ['Virtual and Physical OS Installation', 'OS Types', 'Remote Desktop', 'File Systems', 'User Management', 'Edit Group Policy', 'Folder Sharing', 'Backup & Restore']
    },
    {
      icon: Network,
      category: 'Networking',
      skills: ['Transmission Media', 'OSI and TCP/IP Models', 'Subnetting', 'Network Devices', 'Port & Protocols', 'LAN', 'WAN', 'Network Troubleshooting']
    },
    {
      icon: Database,
      category: 'Windows Server',
      skills: ['ADDS', 'ADC', 'RODC', 'OU', 'DNS', 'FSMO Role Transfer', 'Windows Server 2008 R2', '2012', '2016', '2019', '2022']
    },
    {
      icon: Shield,
      category: 'Monitoring & Tools',
      skills: ['Zabbix', 'Uptime Kuma', 'Kaspersky Endpoint Security', 'Zoho Support Portal']
    }
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Tushar Gupta - Cloud Engineer & IT Infrastructure Expert</title>
        <meta name="description" content="Professional profile of Tushar Gupta, detailing experience, education, and technical skills in cloud computing, networking, and Windows Server administration." />
        <meta property="og:title" content="About Tushar Gupta - Cloud Engineer" />
        <meta property="og:description" content="Professional profile detailing experience, education, and technical skills." />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/00a80f03e5cffd7c59ef8682db6eae19.jpg" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/10 border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
                  <img 
                    src="https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/00a80f03e5cffd7c59ef8682db6eae19.jpg" 
                    alt="Tushar Gupta - Cloud Engineer" 
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-xl tech-glow"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-foreground">
                  Professional Profile
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  Cloud Engineer with knowledge in Cloud Computing, Networking, System Administration, and Technical Support. Skilled in troubleshooting, infrastructure monitoring, and IT operations with a strong passion for continuous learning and delivering efficient technical solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Strengths & Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              
              {/* Strengths */}
              <motion.div className="lg:col-span-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" /> Key Strengths
                </h2>
                <div className="space-y-4">
                  {strengths.map((strength, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex items-start gap-3 p-4 rounded-xl glass-panel hover:tech-glow transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div className="lg:col-span-7" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" /> Education
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-[-24px] last:before:bottom-0 before:w-px before:bg-border">
                      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary ring-4 ring-background tech-glow" />
                      <Card className="border-border/50 shadow-md bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                              <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                <GraduationCap className="w-4 h-4" />
                                {edu.institution}
                              </div>
                            </div>
                            <div className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full whitespace-nowrap self-start shadow-sm">
                              {edu.period}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{edu.location}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="py-20 bg-muted/10 border-t border-border/40 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Technical Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive knowledge across cloud platforms, networking, and system administration.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full glass-panel hover:tech-glow hover:-translate-y-1 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/50">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                            <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                            {category.category}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, idx) => (
                            <SkillBadge key={idx} skill={skill} variant="secondary" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default AboutPage;