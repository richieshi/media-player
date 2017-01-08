from common.connection import getConnection
from flask_restful import Resource, reqparse

def getRequestArgs(*args):
    parser = reqparse.RequestParser()
    for arg in args:
        parser.add_argument(arg, action='append')
    args = parser.parse_args()
    return args

class Playlist(Resource):
    def get(self, user_id, playlist_id):
        connection = getConnection()
        try:
            with connection.cursor() as cursor:
                sql = 'SELECT `video_id`, `id` FROM `music` WHERE `user_id`=%s AND `playlist_id`=%s'
                cursor.execute(sql, (user_id, playlist_id))
                result = cursor.fetchall()
        finally:
            connection.close()
            
        res = {'playlist': result}

        return res

    def post(self, user_id, playlist_id):
        args = getRequestArgs('video_id')
        connection = getConnection()
        try:
            with connection.cursor() as cursor:
                sql = 'INSERT INTO `music` (user_id, playlist_id, video_id) VALUES (%s, %s, %s)'
                cursor.execute(sql, (user_id, playlist_id, args['video_id']))
            connection.commit()
            return '', 201
        finally:
            connection.close()

    def delete(self, user_id, playlist_id):
        args = getRequestArgs('video_id', 'id')
        connection = getConnection()
        try:
            with connection.cursor() as cursor:
                sql = 'DELETE FROM `music` WHERE `user_id`=%s AND `playlist_id`=%s AND `video_id`=%s AND `id`=%s'
                cursor.execute(sql, (user_id, playlist_id, args['video_id'], args['id']))
            connection.commit()
        finally:
            connection.close()
        return '', 200