import { render, screen } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

test('Body renders the Dashboard component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Right/i);
  expect(linkElement).toBeInTheDocument();
});

test("Render the Dashboard component in the document", () => {
  // const component = render(<Dashboard/>);
  // const childElement = component.getByText("Kmph");
  const { getByText } = render(<Dashboard/>);
  const childElement = getByText("Kmph");
  expect(childElement).toBeInTheDocument();
  // console.log(component)
})
