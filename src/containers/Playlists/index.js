import React from 'react';
import { connect } from 'react-redux';
import { playlistsSelector } from '../../store/selectors/songs';
import PlaylistsList from '../../components/playlists/PlaylistsList';

class Playlists extends React.Component {
	render() {
		return (
			<div className="playlists">
				<h1>Playlists</h1>
				<PlaylistsList dispatch={this.props.dispatch} playlists={this.props.playlists}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	playlists: playlistsSelector(state)
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
