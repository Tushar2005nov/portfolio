import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import SkillBadge from './SkillBadge.jsx';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group glass-panel border-border/50">
        {project.image && (
          <div className="w-full aspect-video overflow-hidden bg-muted/30 relative">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 pointer-events-none" />
          </div>
        )}
        <CardHeader className={project.image ? "pt-6 relative z-10" : ""}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                {project.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </CardDescription>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <SkillBadge key={idx} skill={tech} variant="secondary" />
              ))}
            </div>
          </div>
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="mt-auto pt-5 border-t border-border/40">
              <p className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Key Achievements
              </p>
              <ul className="space-y-2.5">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="text-primary/60 mt-1 text-xs leading-none">▹</span>
                    <span className="leading-snug">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;