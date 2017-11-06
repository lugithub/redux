import { expect } from 'chai';
import React from 'react'
import AddTodo from './AddTodo'
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

describe('AddTodo component', () => {
  it('should dispatch when input is not empty', () => {
    const dispatch = sinon.stub();
    const store = {
      subscribe: sinon.spy(),
      dispatch,
      getState: sinon.spy(),
    };

    const wrapper = mount(<AddTodo
      dispatch={ dispatch }
      store={ store } />);

    let input =  wrapper.find('input');
    let element = input.getElement();
    element.ref({value: '123'});

    wrapper.find('form').simulate('submit', {
      preventDefault: sinon.spy()
    });

    expect(dispatch.called).to.be.true;
  });

  it('should not dispatch when input is empty', () => {
    const dispatch = sinon.stub();
    const store = {
      subscribe: sinon.spy(),
      dispatch,
      getState: sinon.spy(),
    };

    const wrapper = mount(<AddTodo
      dispatch={ dispatch }
      store={ store } />);

    let input =  wrapper.find('input');
    let element = input.getElement();
    element.ref({value: ' '});

    wrapper.find('form').simulate('submit', {
      preventDefault: sinon.spy()
    });

    expect(dispatch.called).to.be.false;
  });
})
