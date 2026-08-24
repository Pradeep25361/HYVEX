import React from 'react';
import ServiceTemplate from '../components/ServiceTemplate';
import DigitalMarketingCalculator from '../components/tools/DigitalMarketingCalculator';
import { SERVICES_DATA } from '../data/agencyData';

export default function DigitalMarketing() {
  const service = SERVICES_DATA['digital-marketing'];

  return (
    <ServiceTemplate
      service={service}
      interactiveTool={<DigitalMarketingCalculator />}
    />
  );
}
