import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import { MemoryRouter } from 'react-router-dom';

describe('RestaurantsContainer', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/restaurant/1']}>
      <RestaurantsContainer />
    </MemoryRouter>
  );

  expect(container).toHaveTextContent('양천주가');
});
