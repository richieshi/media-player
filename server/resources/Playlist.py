from .connection import getConnection
from flask_restful import Resource

class Playlist(Resource):
    def get(self, user_id, playlist_id):
        connection = getConnection()
        try:
            with connection.cursor() as cursor:
                sql = 'SELECT `video_id` FROM `music` WHERE `user_id`=%s AND `playlist_id`=%s'
                cursor.execute(sql, (user_id, playlist_id))
                result = cursor.fetchall()
        finally:
            connection.close()
        
        playlist = []
        for item in result:
            playlist.append(item['video_id'])
        res = {'playlist': playlist}

        return res
        