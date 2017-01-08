import pymysql.cursors
import os

def getConnection():
    __location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
    # sql_info contains username on first line and password on second line
    infoFile = open(os.path.join(__location__, 'sql_info.txt'), 'r')
    username = infoFile.readline().strip()
    password = infoFile.readline().strip()
    connection = pymysql.connect(host='localhost',
                                user=username,
                                password=password,
                                db='music_player',
                                cursorclass=pymysql.cursors.DictCursor)
    return connection