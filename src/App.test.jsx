import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('redners vote header', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('Vote for lunch!!!');
  });

  it('redners restaurants list', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('국수나무');
    expect(container).toHaveTextContent('요기맘');
    expect(container).toHaveTextContent('구내식당');
    expect(container).toHaveTextContent('돈푸대');
    expect(container).toHaveTextContent('태양식당');
  });
});
