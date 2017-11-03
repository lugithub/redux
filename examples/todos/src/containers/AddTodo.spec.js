import { expect } from 'chai';
import React from 'react'
import AddTodo from './AddTodo'
import { mount } from 'enzyme';
import sinon from 'sinon';
import { JSDOM } from 'jsdom'
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

describe('AddTodo component', () => {
  it('should handle submit', () => {
    const dispatch = sinon.spy();
    const store = {
      subscribe: sinon.spy(),
      dispatch,
      getState: sinon.spy(),
    };

    const wrapper = mount(<AddTodo
      dispatch={{ dispatch }}
      store={ store } />);

    //wrapper.find('form').simulate('submit');
    //expect(dispatch.called).to.be.true;
  });
})
