import { render, screen } from '@testing-library/react';
import { ListContainer } from '../../src/components/ListContainer';

test('renders the correct number of ListItem components', () => {
  const todos = [
    { _id: '1', title: 'Todo 1', done: false, date: '2021-01-01' },
    { _id: '2', title: 'Todo 2', done: true, date: '2021-02-02' },
  ];

  const update = jest.fn();
  const setUpdate = jest.fn();
  const setIsExploding = jest.fn();

  render(<ListContainer todos={todos} update={update} setUpdate={setUpdate} setIsExploding={setIsExploding} />);

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(todos.length);
});