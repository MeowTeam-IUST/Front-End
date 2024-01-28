import React from 'react';
import { shallow } from 'enzyme';
import { MyOrders } from './MyOrders';
import { MyOrdersdetails } from './MyOrdersDetails';
import { MyOrderApp } from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MyOrderApp', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
    //   onFormSwitch: jest.fn(),
    };
  });

  afterEach(() => {
    // jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<MyOrderApp />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders MyOrders component by default', () => {
    const wrapper = shallow(<MyOrderApp />);
    expect(wrapper.find(MyOrders)).toHaveLength(1);
    expect(wrapper.find(MyOrdersdetails)).toHaveLength(0);
  });

  it('renders MyOrdersdetails component when toggleForm is called with "MyOrdersDetails" as formName', () => {
    const wrapper = shallow(<MyOrderApp />);
    const instance = wrapper.instance();
  });

  it('renders MyOrders component when toggleForm is called with "MyOrders" as formName', () => {
    const wrapper = shallow(<MyOrderApp />);
    const instance = wrapper.instance();
  });
});
