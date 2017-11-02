import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TestRenderer from 'react-test-renderer'
import reducer from '../reducers'
import Link from './Link'
import TestUtils from 'react-dom/test-utils';
import { isElement } from 'react-dom/test-utils';

describe('Link component', () => {
  it('should handle onClick', () => {
    const tree = TestRenderer.create(
      <Link active={false} onClick={ e => {
          console.log('onClick', e);
        }}>children</Link>
    ).root;

    const element = tree.findByType('a');
    TestUtils.Simulate.click(element, {screenX: 111, screenY: 111});
  });
})
