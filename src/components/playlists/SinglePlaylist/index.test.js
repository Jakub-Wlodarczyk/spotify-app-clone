import React from 'react';
import { shallow } from 'enzyme';
import SinglePlaylist from './index';

describe('SinglePlaylist component', () => {
	const props = {
		playlist: { name: 'playlist', songs: ['song1', 'song2']}
	};
	it('should match the snapshot', () => {
		const wrapper = shallow(<SinglePlaylist {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
