import React from 'react';
import ServiceTemplate from '../components/ServiceTemplate';
import PerformanceROICalculator from '../components/tools/PerformanceROICalculator';
import { SERVICES_DATA } from '../data/agencyData';

export default function PerformanceMarketing() {
  const service = SERVICES_DATA['performance-marketing'];

  return (
    <ServiceTemplate
      service={service}
      interactiveTool={<PerformanceROICalculator />}
    />
  );
}
