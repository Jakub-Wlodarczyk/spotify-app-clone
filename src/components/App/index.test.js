import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

const props = {
	dispatch: () => {}
};

describe('App component', () => {
	it('should render the App component', () => {
		const wrapper = shallow(<App {...props} />);
		expect(wrapper).toHaveLength(1);
	});
});


