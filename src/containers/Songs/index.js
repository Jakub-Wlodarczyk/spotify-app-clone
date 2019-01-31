import React from 'react';
import { connect } from 'react-redux';
import { songsSelector, playlistsSelector } from '../../store/selectors/songs';
import SongsList from '../../components/songs/SongsList/index';

class Songs extends React.Component {
	render() {
		const { songs, playlists, dispatch } = this.props;

		return (
			<div className="songs">
				<h1>Available Songs</h1>
				{songs.length > 0 && <SongsList dispatch={dispatch} playlists={playlists} songs={songs}/>}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	songs: songsSelector(state),
	playlists: playlistsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
	dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
