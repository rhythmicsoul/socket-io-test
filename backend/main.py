from flask import Flask, render_template
from flask_socketio import SocketIO

from flask_socketio import send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message')
def handle_message(data):
    print('received message: ' + str(data))
    emit("message", 'okay received: ' + str(data))

#@socketio.on('message')
#def handle_message(message):
#    send(message)

@socketio.on('connect')
def connect():
    print('test')
    emit('after connect')

if __name__ == '__main__':
    socketio.run(app)
