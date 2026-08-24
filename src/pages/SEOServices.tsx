import React from 'react';
import ServiceTemplate from '../components/ServiceTemplate';
import SEORankProjectionTool from '../components/tools/SEORankProjectionTool';
import { SERVICES_DATA } from '../data/agencyData';

export default function SEOServices() {
  const service = SERVICES_DATA['seo-services'];

  return (
    <ServiceTemplate
      service={service}
      interactiveTool={<SEORankProjectionTool />}
    />
  );
}
