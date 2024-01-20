import { render } from '@testing-library/react';
import Footer from '../src/Components/Footer';

test('renders footer with correct content', () => {
  // Render the Footer component
  const { getByText, queryByTestId } = render(<Footer />);

  // Check if the text "Made with" is present in the footer
  const madeWithText = getByText(/Made with/i);
  expect(madeWithText).toBeInTheDocument();

  // Check if the heart icon is present in the footer using data-testid
  const heartIcon = queryByTestId('heart-icon');
  expect(heartIcon).toBeInTheDocument();

  // Check if the author's name is present in the footer
  const authorName = getByText(/by Manjari Dhoundiyal/i);
  expect(authorName).toBeInTheDocument();
});
