import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/Components/Home';

// Mock the projects data
const mockProjects = [
    {
        name: 'Portfolio Website',
        description: 'My personal portfolio website which showcases my resume along with the projects which I am working on.',
        image: '/portfolio/images/portfolio-thumbnail.png'
    },
    {
        name: 'Weather App',
        description: 'This is a weather application created using Vite and TypeScript React. It allows you to search for a location and view its weather details on the dashboard.',
        image: '/portfolio/images/weather-thumbnail.png'
    },

    {
        name: 'AI Intent',
        description: 'This App allows users to get an overview over all the pretrained intents that are available from intents.json. Users can see at least one example expression without any extra clicks and can select/unselect intents individually or all at once.',
        image: '/portfolio/images/AIIntent-thumbnail.png'
    },
    {
        name: 'Mile Calculator',
        description: 'This is an interactive App which allows users to calculate car range per charge on the basis of average speed, outside temperature, wether A/C is turned on and wheel size.',
        image: '/portfolio/images/Milescalculator-thumbnail.png'
    },
  // Add more projects as needed
];

// Mock the skills data
const mockSkills = ['React', 'JavaScript', 'CSS'];

test('renders Home component with correct content', () => {
  // Render the Home component with mocked data
  const { container, getByAltText } = render(
    <Home
      forwardedRef={React.createRef()}
      targetProjectRef={React.createRef()}
      skills={mockSkills}
      projects={mockProjects}
    />
  );

  // Check if the name is present using the custom matcher
  const nameElement = container.querySelector('.home-header');
  expect(nameElement).toBeInTheDocument();
  const nameText = nameElement?.textContent || '';
  expect(/I'm Manjari Dhoundiyal/i.test(nameText)).toBeTruthy();

  // Check if the image is present
  getByAltText("coding-amico");

  const displayedImage = document.querySelector("img") as HTMLImageElement;
  expect(displayedImage.src).toContain("Coding-amico");

  // Check if the projects section is present
  const projectTitle1 = container.querySelector('.project-section'); // Adjust this selector based on your actual structure
  expect(projectTitle1).toBeInTheDocument();
  expect(/Portfolio Website/i.test(projectTitle1?.textContent || '')).toBeTruthy();

  // Check if the skills section is present
  const skillReact = container.querySelector('.skills'); // Adjust this selector based on your actual structure
  expect(skillReact).toBeInTheDocument();
  expect(/React/i.test(skillReact?.textContent || '')).toBeTruthy();
});

