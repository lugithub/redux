import { expect } from 'chai';
import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('TodoList component', () => {
  it('should handle click events', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<TodoList
      todos={[{
        id: 1,
        completed: false,
        text: 'test',
      }]}
      onTodoClick={onClick} />);

    wrapper.find('Todo').simulate('click');
    expect(onClick.called).to.be.true;
  });
})
