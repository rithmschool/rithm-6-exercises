from app import app, db, Sunset
from flask_testing import TestCase
import unittest

class SunsetTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        sunset1 = Sunset(
            image_url="http://www.bestourism.com/img/items/med/725/2861.jpg", caption="this is amazing", location="Hawaii", beauty=8)
        sunset2 = Sunset(
            image_url=
            "https://img.vimbly.com/images/full_photos/san-francisco-bay-sunset-6.jpg",
            caption="city viewzzz",
            location="SF",
            beauty=10)
        sunset3 = Sunset(
            image_url=
            "https://maketimetoseetheworld.com/wp-content/uploads/2017/09/Palawan-Sunset-c-Sarah-Ambler.png",
            caption="what a gorgeous sunset",
            location="Anywhere but here",
            beauty=9)
        db.session.add_all([sunset1, sunset2, sunset3])
        db.session.commit()

    def tearDown(self):
        db.drop_all();

    def test_index(self):
        response = self.client.get('/sunsets', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Hawaii', response.data)
        self.assertIn(b'san-francisco', response.data)
        self.assertIn(b'9', response.data)

    def test_creating_sunset(self):
        response = self.client.post(
            '/sunsets/new',
            data=dict(
                image_url=
                'http://www.bestourism.com/img/items/med/725/2861.jpg',
                caption='omg wow',
                location='Cool Place',
                beauty='7'),
            follow_redirects=True)
        self.assertIn(b'http://www.bestourism.com/img/items/med/725/2861.jpg', response.data)
        self.assertIn(b'omg wow', response.data)
        self.assertIn(b'Cool Place', response.data)
        self.assertIn(b'7', response.data)


if __name__ == '__main__':
    unittest.main()
