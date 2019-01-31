export const ADD_NEW_PLAYLIST = 'ADD_NEW_PLAYLIST';
export const addNewPlaylist = ({ name, id }) => ({
	type: ADD_NEW_PLAYLIST,
	name,
	id
});

export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const addSongToPlaylist = ({ songName, playlistId }) => ({
	type: ADD_SONG_TO_PLAYLIST,
	songName,
	playlistId
});

export const LOAD_PLAYLISTS_FROM_LOCAL_STATE = 'LOAD_PLAYLISTS_FROM_LOCAL_STATE';
export const loadPlaylistsFromLocalState = ({ playlists }) => ({
	type: LOAD_PLAYLISTS_FROM_LOCAL_STATE,
	playlists
});

export const addNewPlaylistCaller = ({ name, id }) => dispatch => dispatch(addNewPlaylist({ name, id}));
