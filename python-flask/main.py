import sqlite3
from flask import Flask, render_template
app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn
 
@app.route('/')
def greeting():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    conn.close()
    return render_template('greeting.html',users=users)

# @app.shell_context_processor
# def make_shell_context():
#     return {"app": app,
#             "db": db
#             }

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")