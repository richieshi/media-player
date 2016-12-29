"""Login API for music app"""
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    """test"""
    return 'Hello, world!'

if __name__ == '__main__':
    app.run()
