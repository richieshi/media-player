"""Login API for music app"""
from flask import Flask
from flask_restful import Api
from resources.Playlist import Playlist
app = Flask(__name__)
api = Api(app)

@app.route('/')
def index():
    return 'Server is up'

api.add_resource(Playlist, '/playlist/<string:user_id>/<string:playlist_id>')

if __name__ == '__main__':
    app.run()