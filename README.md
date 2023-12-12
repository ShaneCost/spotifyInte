# Using the Spotify Web-API to Gather User Data
 
 **Feature(s):**
Our project is a web app that integrates the Spotify API using the Flask framework. The goal is to provide a unique user experience, similar to other popular Spotify web apps like Receiptify and Iceburgify.

### Installation and Setup

```
1) Download Project Files
a) Open the command line on your machine (Terminal on Mac or Command Prompt
on Windows) and navigate to the location you would like to save your files (i.e.
desktop):
$ cd desktop
$ git clone https://github.com/ShaneCost/spotifyInte.git
2) Navigate to Project Directory
a) The rest of the work we will be doing, will be done inside this directory:
$ cd spotifyInte
3) Create Virtual Environment
a) Use venv, pythons virtual environment:
$ python3 -m venv .venv
4) Activate Virtual Environment
a) Isolate the project dependencies:
$ . .venv/bin/activate
5) Install Necessary Packages
a) Using pip, we can install Flask (python framework) and spotipy (open-source
python library for working with the Spotify Web-API):
$ pip install Flask
$ pip install spotipy
6) Set up API Access
a) Use Client ID and Client Secret we (Group 23) created via Spotify for Developers
i) Open project in VS Code
ii) Navigate to app.py
iii) In #CONSTANTS section enter:
(1) CLIENT_ID = 7335fe8c6a29494394c314526901fc59
(2) CLIENT_SECRET = cc7ed1f76e35410392b62fd6a01d4e73

```
