import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from '../src/Components/Projects';
import { vi } from 'vitest';

vi.mock('aos')

const sampleProjects = [
  {
    name: 'Project 1',
    description: 'Description 1',
    image: '/path/to/image1.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description 2',
    image: '/path/to/image2.jpg',
  },
];

describe('Projects Component', () => {
//   beforeAll(() => {
//     // Mock AOS.init() to prevent side effects during tests
//     AOS.init.mockImplementation(() => {});
//   });

  it('renders Projects component with projects', () => {
    render(<Projects projects={sampleProjects} />);

    // Assert that the Projects section is rendered
    expect(screen.getByTestId('project')).toBeInTheDocument();

    // Assert that each project is rendered
    sampleProjects.forEach((project) => {
      const projectElement = screen.getByText(project.name);
      expect(projectElement).toBeInTheDocument();
      expect(projectElement.nextSibling).toHaveTextContent(project.description);
      expect(screen.getByAltText(`${project.name}`)).toHaveAttribute('src', project.image);
    });
  });

  it('initializes AOS on component mount', () => {
    render(<Projects projects={sampleProjects} />);

    // Assert that AOS.init() is called once on component mount
    expect(AOS.init).toHaveBeenCalledTimes(2);
  });

  it('renders Projects component with no projects', () => {
    render(<Projects projects={[]} />);

    // Assert that the Projects section is rendered
    expect(screen.getByTestId('project')).toBeInTheDocument();

    // Assert that no project elements are rendered
    expect(screen.queryByText(sampleProjects[0].name)).not.toBeInTheDocument();
    expect(screen.queryByText(sampleProjects[1].name)).not.toBeInTheDocument();
  });
});
