import React from 'react';
import { shallow } from 'enzyme';
import SongsList from './index';

describe('SingleSong component', () => {
	const props = {
		playlists: [{ name: 'playlist', songs: ['song1', 'song2']}],
		songs: [
			{ title: 'title 1', author: 'author 1', duration: '4:30' },
			{ title: 'title 1', author: 'author 1', duration: '4:30' }
		],
		dispatch: () => {}
	};
	it('should match the snapshot', () => {
		const wrapper = shallow(<SongsList {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
