import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders three list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
});
