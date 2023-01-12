import os
from datetime import timedelta

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class BaseConfig():

    SQLALCHEMY_DATABASE_URI        = 'sqlite:///' + os.path.join(BASE_DIR, 'apidata.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    SECRET_KEY           = os.getenv('SECRET_KEY'    , 'S#perS3crEt_1006' )
    JWT_SECRET_KEY       = os.getenv('JWT_SECRET_KEY', 'S#perS3crEt_JWT' )
      
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)

      ##### настройка Flask-Mail #####
    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME') or 'YOU_MAIL@gmail.com'
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD') or 'password'
    MAIL_DEFAULT_SENDER = MAIL_USERNAME