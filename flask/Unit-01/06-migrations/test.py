from app import app, db, Sunset
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URL"] = 'sqlite:///testing.db'
        return app

