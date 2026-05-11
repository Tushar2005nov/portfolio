import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg group">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold leading-tight">
            {service.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;