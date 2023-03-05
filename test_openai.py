import openai
import os
import re 
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

openai.api_key = "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"
r = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
      messages=[
        {"role": "user", "content": "suggest me 15 songs about horses or dogs"}],
    max_tokens=193,
    temperature=0,
)
data = r["choices"][0]["message"]['content']
data = data.strip()
split = re.split('\d\.', data)
out = {}

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                           client_secret="1a4d1e3af6274dfa89fab72604a65f86"))
for i, x in enumerate(split[1:]):
    title = x.split("by ",1)[0].strip() if len(x.split("by ",1)) > 1 else ""
    author = x.split("by ",1)[1].strip() if len(x.split("by ",1)) > 1 else ""
    
    result = sp.search(q='track:' + x, type='track', limit=1)
    if result:
        track = result['tracks']['items'][0]
        id = track['id']
        cover = track['album']['images'][0]['url']
        title = track['name']
        spotify_uri = track['uri']
        preview_url = track['preview_url']
        artists = ', '.join([x['name'] for x in track['artists']])
        out[i] = {
            "id": id,
            "title": title,
            "artists": artists,
            "text": x,
            "cover": cover,
            "spotify_uri": spotify_uri,
            "preview_url": preview_url
        }
    print(result)
