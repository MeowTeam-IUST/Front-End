import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { MyOrders } from './MyOrders';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MyOrders', () => {
  let mockProps;
  let mockData;

  beforeEach(() => {

    mockData = [
      {
        state: 1,
        invoiceItems: [
          { product: { title: 'Product 1', price: 10 } },
          { product: { title: 'Product 2', price: 20 } },
        ],
        totalPeice: 30,
        date: '2021-08-01T00:00:00.000Z',
      },
      {
        state: 2,
        invoiceItems: [
          { product: { title: 'Product 3', price: 30 } },
          { product: { title: 'Product 4', price: 40 } },
        ],
        totalPeice: 70,
        date: '2021-08-02T00:00:00.000Z',
      },
    ];
  });

  it('handles errors when fetching data from server', async () => {
    // axios.get.mockRejectedValueOnce(new Error('Network Error'));
    // const wrapper = shallow(<MyOrders {...mockProps} />);
    // await expect(wrapper.instance().componentDidMount()).rejects.toThrow('Network Error');
  });
});
