import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Resume from '../src/Components/Resume';
import { vi } from 'vitest';

// Mock pdfjs worker to prevent side effects during tests
// vi.mock('react-pdf', () => ({
//   ...vi.requireActual('react-pdf'),
//   pdfjs: {
//     GlobalWorkerOptions: {
//       workerSrc: '',
//     },
//   },
// }));

vi.mock('react-pdf')

describe('Resume Component', () => {
  it('renders Resume component with download button and PDF viewer', () => {
    render(<Resume />);

    // Assert that the Download CV button is rendered
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(screen.getByTestId('download-button')).toHaveAttribute('href', '/src/assets/Resume.pdf');

    // Assert that the PDF viewer is rendered
    expect(screen.getByTestId('pdf-container')).toBeInTheDocument();
    expect(screen.getByTestId('page-controls')).toBeInTheDocument();
  });

  it('disables previous button on the first page and next button on the last page', () => {
    render(<Resume />);

    // Assert that the previous button is disabled on the first page
    const prevButton = screen.getByText('‹');
    expect(prevButton).toBeDisabled();

    // Assert that the next button is enabled on the first page
    const nextButton = screen.getByText('›');
    expect(nextButton).not.toBeDisabled();

    // Click next button to move to the second page
    fireEvent.click(nextButton);

    // Assert that the previous button is enabled on the second page
    expect(prevButton).not.toBeDisabled();

    // Assert that the next button is disabled on the second page
    expect(nextButton).toBeDisabled();
  });

  it('changes the page number when previous or next button is clicked', () => {
    render(<Resume />);

    // Assert that the initial page number is 1
    expect(screen.getByText('1')).toBeInTheDocument();

    // Click next button to move to the second page
    fireEvent.click(screen.getByText('›'));

    // Assert that the page number is updated to 2
    expect(screen.getByText('2')).toBeInTheDocument();

    // Click previous button to move back to the first page
    fireEvent.click(screen.getByText('‹'));

    // Assert that the page number is updated back to 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

it('scrolls to the top of the page when changing the page number', () => {
    // Mock the window.scrollTo function
    const scrollToMock = vi.fn();
    global.scrollTo = scrollToMock;

    render(<Resume />);

    // Scroll down the page
    act(() => {
      window.scrollY = 100;
    });

    // Click next button to move to the second page
    fireEvent.click(screen.getByText('›'));

    // Assert that the scrollTo function is called with the expected arguments
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});


