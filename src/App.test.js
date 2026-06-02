import { render, screen } from '@testing-library/react';
import App from './app/App';
import { AppProviders } from './app/providers';

test('renders home page', async () => {
  render(
    <AppProviders>
      <App />
    </AppProviders>
  );
  expect(await screen.findByRole('heading', { name: /home/i })).toBeInTheDocument();
});
