import React from 'react';
import { IntlProvider } from 'react-intl';

export const createTestHarness = (component: React.ReactNode) => (
  <IntlProvider locale="en" messages={{}}>
    {component}
  </IntlProvider>
);
