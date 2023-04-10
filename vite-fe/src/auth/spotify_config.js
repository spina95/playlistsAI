const spotify_config = {
    base_url: 'https://accounts.spotify.com/authorize',
    token_url: 'https://accounts.spotify.com/api/token',
    redirect_uri: 'https://musicai.one/api/sessions/oauth/spotify',
    redirect_token: 'https://musicai.one/',
    client_id: '3568d9f9b3544af98e31131a9fcb02dd',
    client_secret: '1a4d1e3af6274dfa89fab72604a65f86',
    scope: 'playlist-modify-private',
    response_type: 'code',
    current_user_url: 'https://api.spotify.com/v1/me'
}
export default spotify_config;