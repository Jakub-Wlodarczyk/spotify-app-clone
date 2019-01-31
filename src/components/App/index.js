import React from 'react';
import SongsContainer from '../../containers/Songs';
import PlaylistsContainer from '../../containers/Playlists';
import { getPlaylistsState } from '../../resources/api';
import { loadPlaylistsFromLocalState } from '../../store/actions/playlists';
import { getSongsList } from '../../store/actions/songs';
import ErrorBoundary from '../ErrorBoundary';

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(getSongsList());
		if (getPlaylistsState()) {
			const playlists = JSON.parse(getPlaylistsState());
			this.props.dispatch(loadPlaylistsFromLocalState({ playlists }));
		}
	}

	render() {
		return (
			<div className="app">
				<ErrorBoundary>
					<SongsContainer />
					<PlaylistsContainer />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
