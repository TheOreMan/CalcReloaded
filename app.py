from flask import Flask, request, session, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)
app.secret_key = 'your_secret_key' #for encrypting the session data
conn = sqlite3.connect('user_database.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    )
''')
conn.commit()
conn.close()

@app.route('/register', methods=['GET','POST'])
def register():
    username = request.args.get('username')
    password = request.args.get('password')
    confirm_password = request.args.get('password2')
    if password != confirm_password: return {'result':'Passwords do not match!'}
    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    conn = sqlite3.connect('user_database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    existing_user = cursor.fetchone()
    if existing_user:
        conn.close()
        return {'result':'Username already exists!'}
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, password_hash))
    conn.commit()
    conn.close()
    return {'result':"Success"}

def checkUserData(username,password):
    conn = sqlite3.connect('user_database.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()
    conn.close()
    if not user: return False
    return bcrypt.check_password_hash(user[2], password)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return "Success"

@app.route('/delete_account', methods=['POST'])
def delete_account():
    if 'username' not in session: return "Failure";
    user_id = session['username']
    conn = sqlite3.connect('user_database.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM users WHERE username = ?', (user_id,))
    conn.commit()
    conn.close()
    session.pop('username', None)
    return "Success"

@app.route('/login', methods=['GET','POST'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')
    return jsonify({'result': checkUserData(username,password)})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

