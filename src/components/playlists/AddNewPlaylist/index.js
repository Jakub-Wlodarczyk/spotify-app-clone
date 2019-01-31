import React from 'react';
import { addNewPlaylistCaller } from '../../../store/actions/playlists';
import { savePlaylistsState } from '../../../resources/api';

class AddNewPlaylist extends React.Component {
	constructor(props) {
		super (props);

		this.state = {
			playlistName: ''
		};

		this.handlePlaylistNameChange = this.handlePlaylistNameChange.bind(this);
	}

	componentDidUpdate() {
		savePlaylistsState(this.props.playlists);
	}

	handlePlaylistNameChange(e) {
		this.setState({
			playlistName: e.target.value
		});
	}

	render() {
		const playlistName = this.state.playlistName;
		return (
			<div>
				<input
					id="playlist-name"
					type="text"
					onChange={this.handlePlaylistNameChange}
					value={playlistName}
					name="playlist-name"
					placeholder="enter playlist name"
				/>
				<button
					id="add-new-playlist"
					type="button"
					onClick={() => this.props.dispatch(addNewPlaylistCaller({ name: playlistName, id: playlistName}))}>Add New Playlist
				</button>
			</div>
		);
	}
}

export default AddNewPlaylist;
