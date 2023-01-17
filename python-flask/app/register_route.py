from app import app
from flask_cors import cross_origin
from flask_restx import Api, Resource, fields
from flask import request, make_response
from .models.user_model import db, Users

rest_api = Api(version="1.0", title="Users API", description='A simple API')

"""MODELS"""

signup_model = rest_api.model('SignUpModel', {"username": fields.String(required=True, min_length=2, max_length=32),
                                              "email": fields.String(required=True, min_length=4, max_length=64),
                                              "password": fields.String(required=True, min_length=4, max_length=16)
                                              })

@app.route('/api/v1/login', methods=["GET"])
def login():
    return ({"msg": "success", "gr": "hello"}, 200)

@app.route("/api/v1/registration", methods=["POST", "OPTIONS"])
@cross_origin()
def registration():
        req_data = request.get_json()
  
        _username = req_data.get("username")
        _email = req_data.get("email")
        _password = req_data.get("password")

        user_exists = Users.get_by_email(_email)
        print(user_exists)
        if user_exists:
            return ({"success": False,
                    "msg": "Email already taken"}, 400)

        new_user = Users(username=_username, email=_email, password=_password, date_joined=None)
        print(Users.query.all())
        db.session.add(new_user)
        db.session.commit()

        # new_user.set_password(_password)
        # new_user.save()

        return ({
                "success": True,
                "userID": new_user.id,
                "msg": "The user was successfully registered"
                }, 200)