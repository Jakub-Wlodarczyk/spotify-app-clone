import fetch from "cross-fetch";

export const GET_SONGS_REQUEST = 'GET_SONGS_REQUEST';

export const getSongsRequest = (data) => ({
	type: GET_SONGS_REQUEST,
	data
});

export const getSongsList = () => dispatch => fetch('songsList.json').then(res => res.json()).then(data => dispatch(getSongsRequest(data.songs)));

