import openai
import os
import re 
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

openai.api_key = "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"
r = openai.Completion.create(model="text-davinci-003", prompt="suggest me 15 soundtracks", temperature=0, max_tokens=200)
data = r["choices"][0]["text"]
data = data.strip()
split = re.split('\d\.', data)
out = {}

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="3568d9f9b3544af98e31131a9fcb02dd",
                                                           client_secret="1a4d1e3af6274dfa89fab72604a65f86"))
for i, x in enumerate(split[1:]):
    title = x.split("by ",1)[0].strip() if len(x.split("by ",1)) > 1 else ""
    author = x.split("by ",1)[1].strip() if len(x.split("by ",1)) > 1 else ""
    out[i] = {
        "title": title,
        "author": author,
        "text": x
    }

    result = sp.search(q='track:' + x, type='track', limit=1)
    print(result)
