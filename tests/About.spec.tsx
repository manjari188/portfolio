import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../src/Components/About';

const mockSkills = ["React", "Angular", "JavaScript", "HTML5", "CSS"];

test('renders About Me section with header and introduction', () => {
    render(<About skills={mockSkills} />);

    const aboutMeSection = screen.getByTestId('aboutme');

    // Check if the About Me section is rendered
    expect(aboutMeSection).toBeInTheDocument();
    expect(screen.getByText(`Manjari Dhoundiyal`)).toBeInTheDocument();
});

test('renders skills section with the provided skills', () => {
    render(<About skills={mockSkills} />);

    // Check if each skill is rendered in the skills container
    mockSkills.forEach(skill => {
        expect(screen.getAllByText(skill)[0]).toBeInTheDocument();
    });
});

test('forwards the ref to the about section', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<About skills={mockSkills} ref={ref} />);

    // Check if the ref is correctly forwarded to the About Me section
    expect(ref.current).toBe(screen.getByTestId('aboutme'));
});
