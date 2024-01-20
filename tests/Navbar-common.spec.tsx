import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NavbarCommon from '../src/Components/Navbar-Common';
import { vi } from 'vitest';

describe('NavbarCommon Component', () => {
  it('renders NavbarCommon component', () => {
    render(
      <MemoryRouter>
        <NavbarCommon scrollIntoAbout={() => {}} scrollIntoProject={() => {}} />
      </MemoryRouter>
    );

    // Assert that the Navbar is rendered
    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    // You can add more assertions here based on your specific use case
  });

  it('redirects to About page when About link is clicked', async () => {
    const scrollIntoAboutMock = vi.fn();
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <NavbarCommon scrollIntoAbout={scrollIntoAboutMock} scrollIntoProject={() => {}} />
      </MemoryRouter>
    );

    // Click the About link
    fireEvent.click(screen.getByText('About'));

    // Assert that the scrollIntoAbout function is called
    await waitFor(() => {
      expect(scrollIntoAboutMock).toHaveBeenCalled();
    });
  });

  it('redirects to Projects page when Projects link is clicked', async () => {
    const scrollIntoProjectMock = vi.fn();
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <NavbarCommon scrollIntoAbout={() => {}} scrollIntoProject={scrollIntoProjectMock} />
      </MemoryRouter>
    );

    // Click the Projects link
    fireEvent.click(screen.getByText('Projects'));

    // Assert that the scrollIntoProject function is called
    await waitFor(() => {
      expect(scrollIntoProjectMock).toHaveBeenCalled();
    });
  });
});
