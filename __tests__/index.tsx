import * as React from 'react';
import {render} from '@testing-library/react';
import List from '../List';

describe('list', () => {
  test('List', () => {
    const result = render(<List/>);
    expect(result.container).toMatchSnapshot();
  });
});
