
import '@testing-library/jest-dom'
import App from '../src/App';
import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('granim', () => {
  return {
    __esModule: true,
    default: vi.fn()
  };
});

Element.prototype.scrollIntoView = vi.fn();

describe('app loads', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('navigates to About section on button click', () => {
    render(<App />);

    const aboutButton = screen.getByRole('button', { name: /about/i });
    fireEvent.click(aboutButton);

    expect(screen.getByTestId('aboutme')).toBeInTheDocument();
  });

  test('navigates to Project section on button click', () => {
    render(<App />);

    const projectButton = screen.getByRole('button', { name: 'Projects' });
    fireEvent.click(projectButton);
  
    expect(screen.getByTestId('project')).toBeInTheDocument();
  });

})