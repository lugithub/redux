import { expect } from 'chai';
import React from 'react'
import Todo from './Todo'
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Todo component', () => {
  it('renders a <li/> component', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Todo
      text={'test'}
      completed={false} onClick={onClick} />);

    expect(wrapper.find('li')).to.have.lengthOf(1);
    expect(wrapper.find('li').prop('style')).to.eql({
      textDecoration: 'none'
    });
  });

  it('renders a line-through <li/> component', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Todo
      text={'test'}
      completed={true} onClick={onClick} />);

    expect(wrapper.find('li').prop('style')).to.eql({
      textDecoration: 'line-through'
    });
  });
})
