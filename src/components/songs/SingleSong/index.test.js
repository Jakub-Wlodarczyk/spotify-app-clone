import React from 'react';
import { shallow } from 'enzyme';
import SingleSong from './index';

describe('SingleSong component', () => {
	const props = {
		playlists: [{ name: 'playlist', songs: ['song1', 'song2']}],
		song: { title: 'title 1', author: 'author 1', duration: '4:30' }
	};
	it('should match the snapshot', () => {
		const wrapper = shallow(<SingleSong {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
