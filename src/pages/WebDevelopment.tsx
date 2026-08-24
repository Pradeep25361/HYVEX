import React from 'react';
import ServiceTemplate from '../components/ServiceTemplate';
import WebDevelopmentTechEstimator from '../components/tools/WebDevelopmentTechEstimator';
import { SERVICES_DATA } from '../data/agencyData';

export default function WebDevelopment() {
  const service = SERVICES_DATA['web-development'];

  return (
    <ServiceTemplate
      service={service}
      interactiveTool={<WebDevelopmentTechEstimator />}
    />
  );
}
