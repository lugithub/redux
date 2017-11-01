import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TestRenderer from 'react-test-renderer'
import reducer from '../reducers'
import App from './App'

const store = createStore(reducer)

describe('App component', () => {
  it('should render tree', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})
