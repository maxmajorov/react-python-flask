from flask import Flask, current_app
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import json
from app.models import *

app = Flask(__name__)
app.config.from_object('config.BaseConfig')

CORS(app)

# инициализирует расширения
db = SQLAlchemy(app)
# db.init_app(app)

from . import register_route

# Setup database
@app.before_first_request
def initialize_database():
    db.create_all()
    

# @app.after_request
# @cross_origin()
# def after_request(response):
#     """
#        Sends back a custom error with {"success", "msg"} format
#     """

#     if int(response.status_code) >= 400:
#         response_data = json.loads(response.get_data())
#         if "errors" in response_data:
#             response_data = {"success": False,
#                              "msg": list(response_data["errors"].items())[0][1]}
#             response.set_data(json.dumps(response_data))
#         response.headers.add('Content-Type', 'application/json')
#     return response
