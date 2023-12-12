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
      (1) CLIENT_ID = __REDACTED__
      (2) CLIENT_SECRET = __REDACTED__
  b) Create your own web app in Spotify for Developers to generate your own Client
  ID and Client Secret
    i) Go to Spotify for Developers
    ii) Create account / Login to existing account
    iii) Navigate to ‘Dashboard’
    iv) Select ‘Create app’
    v) Provide app name
    vi) Enter Redirect URI: http://127.0.0.1:5000/redirectPage
    vii) Select ‘Web API’
    viii) Save app
    ix) Navigate to the app you just created and retrieve your unique Client ID
    and Client Secret
    x) Navigate to ‘User Management’, and enter the information for all users
    you’d like to validate for use of your web app
      **Note: When initially creating a web application using the
      Spotify API, you are defaulted to Development Mode. In
      development mode, only 25 pre-registered users can access their
      account information using your application.
    xi) Open project in VS Code
    xii) Navigate to app.py
    xiii) In #CONSTANTS section enter:
      (1) CLIENT_ID = * your unique Client ID *
      (2) CLIENT_SECRET = * your unique Client Secret *
7) Run the Application
  a) Make the application discoverable on local host:
  $ flask run
8) Open Web Application
  a) The application is up and ready for use:
  http://127.0.0.1:5000
```

### Creative Objectives

Our project aims to deliver a distinct use experience within the realm of Spotify
web-applications. There is an abundance of popular web-applications using the Spotify
Web-API, namely ‘Receiptify’, which we drew inspiration from. We set out to overcome the
challenge of integrating the Spotify API seamlessly into a Flask-based web application, allowing users to interact with their Spotify accounts in a unique and engaging way. The mission is to provide a platform that stands out from existing solutions and offers added value to users.

Living in the realm of modern technologies, our stylistic approach was to make the user feel as though they are taking a momentary step back. Our web application incorporates themes of vintage mail, handwritten letters, and textured stickers to give the feeling of a real, tangible object our user can view and share with others. This aesthetic allows for a pleasant and easy to use user interface, which was a priority of ours during development.

### Tech Summary

We deployed two main technologies while developing our web application: (1) Flask and
(2) the Spotify Web-API. Flask is an open source python framework for web applications. It is often referred to as a microframework. The original developer, Armin Ronacher, designed it to keep the core of the application simple, yet scalable. This means simply importing Flask to your python code `from flask import Flask` will offer very limited functionality. To make the most of the Flask framework, you have to choose your own additional imports. From the Flask documentation, “Instead of an abstraction layer for database support, Flask supports extensions to add such capabilities to the application”. While this ideology may increase the learning curve when developing with Flask, once you have gained familiarity with the technology, it is actually very powerful to be in control of all your own imports. We used the following extensions when developing our application:

`from flask import Flask, request, url_for, session, redirect, render_template`

In brief, these imports serve the following functionalities:

+ `request`: Allows you to access data from a web API.
+ `url_for`: Allows you to make static, relative references to endpoints inside your Python application while it is being served. This is very powerful when incorporating CSS or JavaScript files.
+ `session`: Allows you to store information specific to a user from one request to the next.
+ `redirect`: Relocates the user to a new endpoint inside your Python application.
+ `render_template`: Allows you to send data stored in variables from your Python code to a specified HTML file.

The Spotify Web-API is a very well documented and easy to use API. For creating your
own web application using the Spotify Web-API, look at Usage Instructions: 6-b. This API can be used for a multitude of applications. Just to name a few: gathering data specific to an artist or album, creating playlists, or gathering user data. We chose to use the API to gather user data. Similarly when interacting with user data, there are multitudes of approaches: collecting the user's top artists, top tracks, top genres, and the list goes on. We chose to collect the user’s top artist and top tracks. When interacting with the API, certain requests require different parameters. For our requests, we had to specify three things: (1) the number of tracks/artists we wanted returned to us, (2) the offset from zero where we wanted to begin collecting our data, and (3) the time range we wanted the data to cover. We used spotipy, an open source python library, for interacting with the Spotify API, which provided us with some clean and clever syntax. Here is an example of a request to the API using spotipy:

```plaintext
short_term_track = sp.current_user_top_tracks(
    limit=1,
    offset=0,
    time_range= ‘short_term’
)
\```

In this example, `sp` is a spotipy object we created using the user’s Spotify credentials
once they have logged into their Spotify account. The method `.current_user_top_tracks` is from the spotipy library which returns the authorized users most listened to songs. We passed the parameters, (1) `limit=1` which tells the API to return only one song from the data (2) `offset=0` which tells the API to begin the request at index zero, where index zero represent their most listened to song and later indices provide a sequential ranking of songs (3) `time_range= ‘short_term’` which tells the API to gather the data based on their last 4-weeks of listening history (as defined by the Spotify Web API). The other options for this parameter are: (a)`‘medium_term’` [last 6-months of listening history] or (b) `‘long_term’` [all-time listening history]. Finally, we stored this data in the variable `short_term_track`, which is later sent to an HTML file; exemplified here:

  `return render_template(‘tracks.html’, short_term_track= short_term_track)`

The final piece of technology to briefly examine is the syntax of integrating Python data
inside your HTML file. Flask employs the Jinja library for working with templates. A Jinja
template is any form of text file (HTML, CSV, ect.), where variables are held and then replaced
as the template renders. Jinja also includes tags, which are used to control the logic of the
template. Here is an example of this syntax inside our `tracks.html` file:

```plaintext
<p> artists i like right now </p>
{% for artist in short_term_artists['items'] %}
   <p> {{ artist['name'] }} </p>
{% endfor %}
\```
