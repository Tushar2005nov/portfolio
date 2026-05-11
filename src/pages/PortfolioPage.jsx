import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const projects = [
    {
      name: 'Zabbix Infrastructure Monitoring',
      description: 'Implemented comprehensive server monitoring and alert configuration using Zabbix. Set up performance tracking, real-time dashboards, and automated alerts to reduce infrastructure downtime and improve system reliability.',
      technologies: ['Zabbix', 'Server Monitoring', 'Alert Configuration', 'Performance Tracking'],
      outcomes: [
        'Reduced mean time to detection (MTTD) for critical alerts',
        'Created comprehensive dashboards for real-time visibility',
        'Prevented multiple potential outages through proactive monitoring'
      ],
      image: 'https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/58a1cc1c51d47c0e9b0aa64d393ae6f4.png'
    },
    {
      name: 'Mini PC Deployment & Configuration',
      description: 'Collaborated with the team to assemble and deploy over 200 mini PCs. Ensured proper hardware configuration, OS installation (Windows 10/11, Ubuntu, AlmaLinux), and delivery aligned with client requirements and project timelines.',
      technologies: ['Hardware Assembly', 'OS Installation', 'Configuration Management', 'Quality Assurance'],
      outcomes: [
        'Successfully deployed 200+ units ahead of schedule',
        'Achieved zero hardware failure rate post-deployment',
        'Standardized the imaging process for faster turnaround'
      ],
      image: 'https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/5476c35d3ccc5b8b4a8e60e5caf5e544.jpg'
    },
    {
      name: 'Zoho Desk Ticketing System Implementation',
      description: 'Implemented and managed Zoho Support Portal for ticket handling, incident tracking, and customer communication. Streamlined support workflows and improved response times for end-user issues.',
      technologies: ['Zoho Desk', 'Ticket Management', 'Incident Tracking', 'Customer Support'],
      outcomes: [
        'Maintained high customer satisfaction through rapid response times',
        'Streamlined ticket routing and documentation processes',
        'Improved SLA compliance tracking and reporting'
      ],
      image: 'https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/6c8d2d09556e8ebfd51d8c1c7f94bf36.webp'
    },
    {
      name: 'TSplus Remote Access Solution',
      description: 'Configured and managed TSplus remote desktop solutions for multi-user environments. Set up secure remote access, managed user permissions, and published applications for remote and hybrid teams.',
      technologies: ['TSplus', 'Remote Desktop', 'Multi-user Access', 'Application Publishing'],
      outcomes: [
        'Enabled seamless remote work capabilities for distributed teams',
        'Implemented secure access policies reducing unauthorized login attempts',
        'Optimized application delivery for low-bandwidth connections'
      ],
      image: 'https://horizons-cdn.hostinger.com/847b9374-f9fe-4cd2-a3d2-c906dd286408/300c9637ae5f2910b634a443452425d2.jpg'
    },
    {
      name: 'Windows Server & Linux Infrastructure Management',
      description: 'Administered diverse server environments including Windows Server (2008 R2 to 2022) and Linux distributions (Ubuntu, AlmaLinux, CentOS). Managed ADDS, DNS, and Group Policy.',
      technologies: ['Windows Server 2022', 'Ubuntu', 'AlmaLinux', 'CentOS', 'ADDS', 'DNS', 'Group Policy'],
      outcomes: [
        'Maintained 99.9% uptime across mixed OS environments',
        'Standardized Group Policy deployments across the domain',
        'Executed seamless OS upgrades and patch management'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="min-h-screen flex flex-col">
      <Helmet>
        <title>Portfolio - Tushar Gupta | Cloud Engineer</title>
        <meta name="description" content="Explore real-world cloud support and infrastructure projects executed by Tushar Gupta, including server management, remote access solutions, and system monitoring." />
        <meta property="og:title" content="Portfolio - Tushar Gupta | Cloud Engineer" />
        <meta property="og:description" content="Explore real-world cloud support and infrastructure projects." />
        <link rel="canonical" href="https://tushargupta.dev/portfolio" />
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
                Project Portfolio
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                A showcase of hands-on experience in cloud support, server administration, and infrastructure optimization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;