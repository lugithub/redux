import { expect } from 'chai';
import React from 'react'
import AddTodo from './AddTodo'
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('AddTodo component', () => {
  it('should handle submit', () => {
    const dispatch = sinon.stub();
    const store = {
      subscribe: sinon.spy(),
      dispatch,
      getState: sinon.spy(),
    };

    const wrapper = shallow(<AddTodo
      dispatch={ dispatch }
      store={ store } />).dive();

    wrapper.find('form').simulate('submit', {
      preventDefault: sinon.spy()
    });
    expect(dispatch.called).to.be.true;
  });
})
