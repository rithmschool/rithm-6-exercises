import os


class Config():
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'postgres://localhost/user-messages'


class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    app.config['DEBUG'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')


class DevelopmentConfig(Config):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/user-messages'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_ECHO'] = True
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')


class TestingConfig(Config):
    TESTING = True
