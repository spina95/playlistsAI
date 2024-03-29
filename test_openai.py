import openai
import os
import re 
import spotipy
import json
from spotipy.oauth2 import SpotifyClientCredentials

openai.api_key = "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"

premessage = "answer this question in a json dictionary with title and artist: \n## "
message = "Find the songs that have won an Oscar in the last 10 years"
r = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
      messages=[
        {"role": "user", "content": premessage + message}],
    temperature=0,
)
data = r["choices"][0]["message"]['content']

json_data = json.loads(data)

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                           client_secret="1a4d1e3af6274dfa89fab72604a65f86"))

out = {}
found_field = None
for field in json_data:
    if isinstance(json_data[field], list):
        found_field = field

for i, x in enumerate(json_data[found_field]):
    title = x['title']
    author = x['artist']
    search_text = title + ' ' + author
    result = sp.search(q='track:' + search_text, type='track', limit=1)
    if result and len(result['tracks']['items']) > 0:
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
            "text": search_text,
            "cover": cover,
            "spotify_uri": spotify_uri,
            "preview_url": preview_url
        }
    print(result)
pass
'''
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
'''