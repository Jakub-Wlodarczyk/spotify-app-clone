import React from 'react';
import SinglePlaylist from '../SinglePlaylist';
import AddNewPlaylist from '../AddNewPlaylist';

class PlaylistsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showPlaylistCreation: false
		};

		this.handlePlaylistCreation = this.handlePlaylistCreation.bind(this);
	}

	handlePlaylistCreation() {
		this.setState((prevState) => (
			{showPlaylistCreation: !prevState.showPlaylistCreation}
		));
	}

	render() {
		const { playlists } = this.props;
		const { showPlaylistCreation } = this.state;

		return (
			<div className="playlists-list">
				{
					playlists.length
					? playlists.map((playlist) => <SinglePlaylist key={playlist.id} playlist={playlist} />)
					: <p>You have no playlists. Create one by clicking the button below.</p>
				}
				<button type="button" onClick={this.handlePlaylistCreation}>Add Playlist</button>
				{showPlaylistCreation && <AddNewPlaylist playlists={playlists} dispatch={this.props.dispatch} />}
			</div>
		);
	}
}

export default PlaylistsList;

