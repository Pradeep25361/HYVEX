import React from 'react';
import ServiceTemplate from '../components/ServiceTemplate';
import AppScopeEstimator from '../components/tools/AppScopeEstimator';
import { SERVICES_DATA } from '../data/agencyData';

export default function AppDevelopment() {
  const service = SERVICES_DATA['app-development'];

  return (
    <ServiceTemplate
      service={service}
      interactiveTool={<AppScopeEstimator />}
    />
  );
}
