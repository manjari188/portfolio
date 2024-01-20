import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialLink from '../src/Components/SocialLink';

describe('SocialLink Component', () => {
  it('renders SocialLink component with social icons and links', () => {
    render(<SocialLink />);

    // Assert that the LinkedIn icon and link are rendered
    const linkedinIcon = screen.getByTestId('linkedin-icon');
    expect(linkedinIcon).toBeInTheDocument();
    expect(linkedinIcon.closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/manjari-dhoundiyal');
    expect(linkedinIcon.closest('a')).toHaveAttribute('target', '_blank');

    // Assert that the GitHub icon and link are rendered
    const githubIcon = screen.getByTestId('github-icon');
    expect(githubIcon).toBeInTheDocument();
    expect(githubIcon.closest('a')).toHaveAttribute('href', 'https://github.com/manjari188');
    expect(githubIcon.closest('a')).toHaveAttribute('target', '_blank');

    // Assert that the YouTube icon and link are rendered
    const youtubeIcon = screen.getByTestId('youtube-icon');
    expect(youtubeIcon).toBeInTheDocument();
    expect(youtubeIcon.closest('a')).toHaveAttribute('href', 'https://www.youtube.com/channel/UCAhZtpGA1W_F0j5jJG9s_PQ');
    expect(youtubeIcon.closest('a')).toHaveAttribute('target', '_blank');
  })
});
