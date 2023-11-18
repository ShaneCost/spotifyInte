from flask import Flask, request, url_for, session, redirect, render_template

import spotipy
from spotipy.oauth2 import SpotifyOAuth

#DEFINING CONSTS
CLIENT_ID = "7335fe8c6a29494394c314526901fc59"
CLIENT_SECRET = "cc7ed1f76e35410392b62fd6a01d4e73"
TOKEN_INFO = "token_info"
SECRET_KEY = "asdf"
MEDIUM_TERM = "medium_term"
SHORT_TERM = "short_term"

def create_spotify_oauth():
    return SpotifyOAuth(
        client_id = CLIENT_ID,
        client_secret = CLIENT_SECRET,
        redirect_uri = url_for("redirectPage", _external=True),
        scope = "user-top-read user-library-read"
    )

app = Flask(__name__)
app.secret_key = SECRET_KEY

@app.route("/")
def index():
    name = 'username'
    return render_template('index.html', title='Welcome', username=name)

@app.route("/login")
def login():
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)
    

@app.route("/redirectPage")
def redirectPage():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code') # redirectPage?code=TOKEN, returns TOKEN
    token_info = sp_oauth.get_access_token(code)
    session[TOKEN_INFO] = token_info
    return redirect(url_for("receipt", _external=True))

def get_token():
    token_info = session.get(TOKEN_INFO, None)
    return token_info

@app.route("/receipt")
def receipt():
    user_token = get_token()
    sp = spotipy.Spotify(
        auth = user_token['access_token']
    )
    short_term = sp.current_user_top_tracks(
        limit=10,
        offset=0,
        time_range=SHORT_TERM
    )

    medium_term = sp.current_user_top_tracks(
        limit=10,
        offset=0,
        time_range=MEDIUM_TERM
    )
    name = 'username'
    return render_template('receipt.html', short_term=short_term, medium_term=medium_term)