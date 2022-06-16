import { render, screen, act } from '@testing-library/react';
import { createTestHarness } from '../lib/createTestHarness';
import Home from '../pages/index';

test('renders', async () => {
  await act(async () => {
    render(createTestHarness(<Home />));
  });

  screen.getAllByText(/welcome to/i);
});
