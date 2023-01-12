import sqlite3

connection = sqlite3.connect('database.db')

with open('./db/schema/user-schema.sql') as file:
    connection.executescript(file.read())

cur = connection.cursor()

cur.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            ('User Example', 'Email First user', '11111111')
            )

connection.commit()
connection.close()