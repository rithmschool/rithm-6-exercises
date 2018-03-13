from app import app, db, Sunset
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URL"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        sunset1 = Sunset('https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg/?width=391&height=211&ext=.jpg&maxsidesize=550')
        sunset2 = Sunset
        sunset3
        db.session.add)all([sunset1, sunset2, sunset3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_index(self):
        response = self.client.get('/sunsets', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'', response.data)
        self.assertIn(b'', response.data)
        self.assertIn(b'', response.data)

    def test_create(self):
        response = self.client.post('/sunsets', data=dict(img-url, location='',
        caption='', beauty-index='')
        self.assertIn(b'', response.data)


if __name__ == '__main__':
    unittest.main()
