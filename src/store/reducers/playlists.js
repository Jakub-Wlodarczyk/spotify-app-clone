import {
	ADD_NEW_PLAYLIST,
	ADD_SONG_TO_PLAYLIST,
	LOAD_PLAYLISTS_FROM_LOCAL_STATE
} from '../actions/playlists';

const initialState = {
	playlists: []
};

const playlists = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_PLAYLISTS_FROM_LOCAL_STATE:
			return Object.assign({}, state, { playlists: action.playlists });
		case ADD_NEW_PLAYLIST:
			const playlistElement = [...state.playlists, { name: action.name, id: action.id, songs: [] }];
			return Object.assign({}, state, { playlists: playlistElement });
		case ADD_SONG_TO_PLAYLIST:
			// TODO: too long, refactor
			const updatedPlaylist = state.playlists.find(val => val.id === action.playlistId);
			const updatedPlaylistIndex = state.playlists.findIndex(val => val.id === action.playlistId);
			let modifiedPlaylist = [...state.playlists];
			let updateSongs = [];

			if (!updatedPlaylist.songs.includes(action.songName)) {
				updateSongs = [...updatedPlaylist.songs, action.songName];
			} else {
				updateSongs = [...updatedPlaylist.songs];
			}

			modifiedPlaylist[updatedPlaylistIndex] = Object.assign({}, updatedPlaylist, { songs: updateSongs });

			return Object.assign({}, state, { playlists: modifiedPlaylist });
		default:
			return state;
	}
};

export default playlists;
