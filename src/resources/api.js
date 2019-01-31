export const savePlaylistsState = playlists => localStorage.setItem('localPlaylists', JSON.stringify(playlists));
export const getPlaylistsState = () => localStorage.getItem('localPlaylists');
