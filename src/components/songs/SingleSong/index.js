import React from 'react';
import { addSongToPlaylist } from '../../../store/actions/playlists';
import { savePlaylistsState } from '../../../resources/api';

class SingleSong extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showPlaylists: false,
			currentPlaylist: '',
			showConfirm: false
		};

		this.handlePlaylistsView = this.handlePlaylistsView.bind(this);
		this.handlePlaylistChange = this.handlePlaylistChange.bind(this);
		this.handleSongAdding = this.handleSongAdding.bind(this);
	}

	componentDidUpdate() {
		savePlaylistsState(this.props.playlists);
	}

	handlePlaylistsView() {
		this.setState((prevState) => ({
			showPlaylists: !prevState.showPlaylists,
			showConfirm: true
		}));
	}

	handlePlaylistChange(e) {
		const playlist = e.target.value;
		if (playlist) {
			this.setState({
				currentPlaylist: playlist
			});
		}
	}

	handleSongAdding() {
		if (this.state.currentPlaylist) {
			this.props.dispatch(addSongToPlaylist({
				songName: this.props.song.title,
				playlistId: this.state.currentPlaylist
			}));
		}
	}

	render() {
		const { title, author, duration } = this.props.song;
		const { playlists } = this.props;
		const { showPlaylists, currentPlaylist, showConfirm } = this.state;

		return (
			<div className="single-song">
				<p><b>Song title:</b> {title}</p>
				<p><b>Song author:</b> {author}</p>
				<p><b>Song duration:</b> {duration}</p>
				<button type="button" onClick={this.handlePlaylistsView}>Add To Playlist</button>

				{
					showPlaylists &&
						<select value={currentPlaylist} onChange={this.handlePlaylistChange}>
							<option value="">select playlist</option>
							{playlists.map(playlist => <option key={playlist.id} value={playlist.id}>{playlist.name}</option>)}
						</select>
				}
				{
					(playlists.length > 0 && showConfirm && showPlaylists) && <button type="button" onClick={this.handleSongAdding}>Confirm adding</button>
				}
			</div>
		);
	}
}

export default SingleSong;
