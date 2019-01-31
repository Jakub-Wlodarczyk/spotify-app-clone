import React from 'react';
import { shallow } from 'enzyme';
import AddNewPlaylist from './index';

describe('AddNewPlaylist component', () => {
	it('should have a correct input and button', () => {
		const wrapper = shallow(<AddNewPlaylist />);
		const input = wrapper.find('#playlist-name');
		const button = wrapper.find('#add-new-playlist');

		expect(input).toHaveLength(1);
		expect(button).toHaveLength(1);
	});

	it('should call dispatch on button click', () => {
		const mockFunction = jest.fn();
		const wrapper = shallow(<AddNewPlaylist dispatch={mockFunction} /> );
		wrapper.find('#add-new-playlist').simulate('click');

		expect(mockFunction).toHaveBeenCalled();
	});

	it('should update the playlistName in the state after onChange event', () => {
			const event = {
				preventDefault() {},
				target: { value: 'some value' }
			};
			const wrapper = shallow(<AddNewPlaylist />);
			wrapper.find('#playlist-name').simulate('change', event);

			expect(wrapper.state().playlistName).toEqual('some value');
	});
});

