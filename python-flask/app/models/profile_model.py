from app import app
from flask_sqlalchemy import SQLAlchemy
from app import db

class Profile(db.Model):

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(50), nullable=True)
    city = db.Column(db.String(50))
    age = db.Column(db.Integer)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id')) #берез с таблицы Users

    def __repr__(self):
        return f"Profile {self.id}"

    