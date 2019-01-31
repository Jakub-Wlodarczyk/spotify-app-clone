import { GET_SONGS_REQUEST } from '../actions/songs';

const initialState = {
	songs: []
};

const songs = (state = initialState, action) => {
	switch (action.type) {
		case GET_SONGS_REQUEST:
			return Object.assign({}, state, { songs: action.data });
		default:
			return state;
	}
};

export default songs;
