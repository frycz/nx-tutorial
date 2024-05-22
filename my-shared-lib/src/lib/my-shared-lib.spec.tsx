import { render } from '@testing-library/react';

import MySharedLib from './my-shared-lib';

describe('MySharedLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MySharedLib />);
    expect(baseElement).toBeTruthy();
  });
});
