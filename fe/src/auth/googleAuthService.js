import qs from 'qs';
import axios from 'axios';
import spotify_config from './spotify_config';
import { SearchService } from '@/common/api.Search';

async function login() {
  const data = await SearchService.getGoogleLogin();
  const url = data.data.url
  window.location.assign(url)
}

async function postGoogleCode(code) {
  const data = {
    code: code,
    client_id: spotify_config.client_id,
    client_secret: spotify_config.client_secret,
    grant_type: 'authorization_code',
    redirect_uri: spotify_config.redirect_uri,
    scope: spotify_config.scope
  };

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: decodeURIComponent(qs.stringify(data)),
    url: spotify_config.token_url
  };

  try {
    return await axios(options);
  } catch (err) {
    console.error(err);
  }
}

async function requestToken(code) {
  try {
    return await postGoogleCode(code);
  } catch (err) {
    console.error(err);
  }
}

async function getUserInfo(token) {
  try {
    
    return await axios.get(
      `${spotify_config.current_user_url}`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
}

export default {
  login,
  requestToken,
  getUserInfo
};
