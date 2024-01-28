import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('AdminOrderDetails', () => {
  const props = {
    data: {
      date: '2022-02-22T22:22:22.000Z',
      id: '123',
    },
  };

  it('should set userdata state when fetchuserData is called', async () => {
    const response = {
      data: {
        data: {
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
      },
    };
  });
});
