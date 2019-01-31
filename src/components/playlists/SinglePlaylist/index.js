import React from 'react';

class SinglePlaylist extends React.Component {
	constructor(props) {
		super(props);

		this.handlePlaylistCreation = this.handlePlaylistCreation.bind(this);
	}

	handlePlaylistCreation() {
		this.setState((prevState) => (
			{showPlaylistCreation: !prevState.showPlaylistCreation}
		));
	}

	render() {
		const { playlist } = this.props;

		return (
			<div className="single-song">
				<p><b>Playlist name:</b> {playlist.name}</p>
				<p><b>Songs:</b></p>
				{playlist.songs.length > 0 && playlist.songs.map(song => <span key={song}>{song} | </span>)}
			</div>
		);
	}
}

export default SinglePlaylist;
