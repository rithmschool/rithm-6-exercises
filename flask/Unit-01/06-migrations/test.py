from app import app, db, Sunset
from flask_testing import TestCase
import unittest

class SunsetsTestCase(TestCase):
    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        sunset1 = Sunset(image_url = 'https://www.sunsetkeycottages.com/getmedia/ef1ec7db-fc7c-4b82-aa8f-b2c8ded6b0d9/special-offer2.jpg?width=391&height=211&ext=.jpg&maxsidesize=550', caption = 'test sunset 1', location = 'Europe', beauty = '7')
        sunset2 = Sunset(image_url = 'https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/heros/Route_SunsetLimited_HeroBanner_2_0,.jpg/_jcr_content/renditions/cq5dam.web.2125.1195.jpeg', caption = 'test sunset 2', location = 'America', beauty = '8')
        sunset3 = Sunset(image_url = 'https://static.pexels.com/photos/417142/pexels-photo-417142.jpeg', caption = 'test sunset 3', location = 'Africa', beauty = '9')
        db.session.add_all([sunset1, sunset2, sunset3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_index(self):
        response = self.client.get('/sunsets', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test sunset 1', response.data)
        self.assertIn(b'SunsetLimited', response.data)
        self.assertIn(b'Africa', response.data)

    def test_new(self):
        response = self.client.post(
            '/sunsets/new',
            data=dict(image_url = 'https://static.pexels.com/photos/417142/pexels-photo-417142.jpeg', caption = 'test sunset 4', location = 'Africa', beauty = '9'),
            follow_redirects=True
        )
        self.assertIn(b'test sunset 4', response.data)
        self.assertIn(b'static.pexels', response.data)
        self.assertIn(b'Africa', response.data)

if __name__ == '__main__':
    unittest.main()
