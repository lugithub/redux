import { expect } from 'chai';
import React from 'react'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import TestRenderer from 'react-test-renderer'
//import reducer from '../reducers'
import Link from './Link'
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Link component', () => {
  it('renders an <a/> component', () => {
    const wrapper = shallow(<Link active={false} onClick={ e => {
        console.log('onClick', e);
      }}>children</Link>);
    expect(wrapper.find('a')).to.have.lengthOf(1);
  });

  it('should handle click events', () => {
    const onClick = sinon.spy();
    const preventDefault = sinon.spy();
    const wrapper = shallow(<Link active={false} onClick={onClick}>
      children</Link>);
    wrapper.find('a').simulate('click', { preventDefault });
    expect(onClick.called).to.be.true;
    expect(preventDefault.called).to.be.true;
  });
})
