import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TestRenderer from 'react-test-renderer'
import reducer from '../reducers'
import Link from './Link'
import ReactTestUtils from 'react-dom/test-utils';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
//const store = createStore(reducer)

describe('Link component', () => {
  it('should handle onClick', () => {
    // const tree = TestRenderer.create(
    //   <Link active={false} onClick={e => e}>children</Link>
    // ).toTree();
    const tree = Link({
      active: false,
      children: 'children',
      onClick: console.log,
    });
    const element = findRenderedComponentWithType(tree, 'a');
    ReactTestUtils.Simulate.click(element);

  });
})
