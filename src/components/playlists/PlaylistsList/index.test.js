import React from 'react';
import { shallow } from 'enzyme';
import PlaylistsList from './index';

describe('PlaylistsList component', () => {
	it('should toggle the showPlaylistCreation in the state after button click', () => {
		const props = {
			playlists: []
		};

		const wrapper = shallow(<PlaylistsList {...props} />);
		const button = wrapper.find('button');
		button.simulate('click');

		expect(wrapper.state().showPlaylistCreation).toEqual(true);

		button.simulate('click');

		expect(wrapper.state().showPlaylistCreation).toEqual(false);

	});

	it('should display info message if playlists list is empty', () => {
		const props = {
			playlists: []
		};
		const wrapper = shallow(<PlaylistsList {...props} />);
		const message = wrapper.find('p');
		expect(message.exists()).toEqual(true);
	});

	it('should not display info message if playlists list is not empty', () => {
		const props = {
			playlists: [{ name: 'playlist1', songs: ['song 1', 'song2']}]
		};
		const wrapper = shallow(<PlaylistsList {...props} />);
		const message = wrapper.find('p');
		expect(message.exists()).toEqual(false);
	});
});

