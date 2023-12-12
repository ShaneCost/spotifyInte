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
