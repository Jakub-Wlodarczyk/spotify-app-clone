import { combineReducers } from 'redux';
import songs from './songs';
import playlists from './playlists';

const rootReducer = combineReducers({
	songs,
	playlists
});

export default rootReducer;
