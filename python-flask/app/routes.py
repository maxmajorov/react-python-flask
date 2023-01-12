from app import app
from flask import request, session, jsonify, make_response, current_app
from flask_restx import Api, Resource, fields
from flask_cors import cross_origin
from .models import db, Users
import json

rest_api = Api(version="1.0", title="Users API", description='A simple API')

"""MODELS"""

signup_model = rest_api.model('SignUpModel', {"username": fields.String(required=True, min_length=2, max_length=32),
                                              "email": fields.String(required=True, min_length=4, max_length=64),
                                              "password": fields.String(required=True, min_length=4, max_length=16)
                                              })

@app.route('/')
def index():
    return {"msg" : 'Hello, friend...'}

@app.route("/api/users/register", methods=['POST'])
@cross_origin()
class UserRegistration(Resource):
    # @rest_api.marshal_with(signup_model, envelope='resource')
    @rest_api.expect(signup_model, validate=True)
    def post(self):
     
        req_data = request.get_json()
    
        _username = req_data.get("username")
        _email = req_data.get("email")
        _password = req_data.get("password")

        user_exists = Users.get_by_email(_email)
        # if user_exists:
        #     return {"success": False,
        #             "msg": "Email already taken"}, 400

        new_user = Users(username=_username, email=_email, password=_password)

        db.session.add(new_user)
        db.session.commit()

        new_user.set_password(_password)
        new_user.save()

    
        response = app.make_response(
            jsonify(
                    [{"message": "dddd", "severity": "danger"}]
                ),
                401
        )
        return response
        # return {
        #         "success": True,
        #         "userID": new_user.id,
        #         "msg": "The user was successfully registered"
        #         }
        #        
     
     
           
      
        








