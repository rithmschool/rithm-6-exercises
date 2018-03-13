from app import app, db, Sunset
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        app.config["SQLALCHEMY_ECHO"] = False
        return app

    def setUp(self):
        db.create_all()
        sunset1 = Sunset(image_url='https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg/?width=391&height=211&ext=.jpg&maxsidesize=550',
        caption="hi", location="san francisco", beauty=5)
        sunset2 = Sunset(image_url='https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg/?width=391&height=211&ext=.jpg&maxsidesize=550',
        caption="hello", location="oakland", beauty=5)
        sunset3 = Sunset(image_url='https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg/?width=391&height=211&ext=.jpg&maxsidesize=550',
        caption="howdy", location="new york", beauty=5)
        db.session.add_all([sunset1, sunset2, sunset3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_index(self):
        response = self.client.get('/sunsets', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'hi', response.data)
        self.assertIn(b'hello', response.data)
        self.assertIn(b'howdy', response.data)
        self.assertIn(b'oakland', response.data)
        self.assertIn(b'new york', response.data)
        self.assertIn(b'san francisco', response.data)

    def test_create(self):
        with self.client:
            response = self.client.post('/sunsets',
            data=dict(image_url='https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg/?width=391&height=211&ext=.jpg&maxsidesize=550', location='costa rica', caption='whoa', beauty=4),
            follow_redirects=True)
            self.assertIn(b'costa rica', response.data)
            self.assertIn(b'whoa', response.data)
            self.assertIn(b'4', response.data)


if __name__ == '__main__':
    unittest.main()
