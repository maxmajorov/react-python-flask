import json

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_cors import cross_origin
from flask_restx import Api, Resource, fields

import os, config

app = Flask(__name__)
app.config.from_object('config.BaseConfig')
CORS(app)

db = SQLAlchemy(app)
db.init_app(app)

rest_api = Api(version="1.0", title="Users API")
rest_api.init_app(app)


from . import routes

# Setup database
@app.before_first_request
def initialize_database():
    db.create_all()

"""
   Custom responses
"""

@app.after_request
@cross_origin()
def after_request(response):
    """
       Sends back a custom error with {"success", "msg"} format
    """

    if int(response.status_code) >= 400:
        response_data = json.loads(response.get_data())
        if "errors" in response_data:
            response_data = {"success": False,
                             "msg": list(response_data["errors"].items())[0][1]}
            response.set_data(json.dumps(response_data))
        response.headers.add('Content-Type', 'application/json')
    return response