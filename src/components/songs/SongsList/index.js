import React from 'react';
import SingleSong from '../SingleSong';

const SongsList = ({ songs, playlists, dispatch }) => (
	<div className="songs-list">
		{songs.map((song) => <SingleSong key={song.title} dispatch={dispatch} playlists={playlists} song={song} />)}
	</div>
);

export default SongsList;
