import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypewriterString from '../src/Components/Typewriter-String';
import TypewriterEffect from 'typewriter-effect';  // Import the actual TypewriterEffect
import { vi } from 'vitest';

// Mock the typewriter-effect module
vi.mock('typewriter-effect');

describe('TypewriterString Component', () => {
  it('renders TypewriterString component with specified data', () => {
    const testData = ['Hello', 'World', 'Typewriter'];
    render(<TypewriterString data={testData} />);
    console.log(TypewriterEffect)
    expect(TypewriterEffect).toHaveBeenCalledWith(

      {
        "component": "div",
        "options": {
          "autoStart": true,
          "deleteSpeed": 50,
          "loop": true,
          "strings": [
            "Hello",
            "World",
            "Typewriter",
          ],
        },
      },
      {}
    )
  });
});
