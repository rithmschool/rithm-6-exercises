from app import app,db, Sunset
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        sunset1 = Sunset(img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmc2z9wZoZJ46lucqOTMWdX48jpHs0DzQtDPicOpm5mrGd0YNuQ",caption="OMG LOVE THE SUNSET", location="#heaven", beauty="10" )
        sunset2 = Sunset(img_url="https://cdn.drawception.com/images/panels/2015/9-20/9LTywze8nf-2.png",caption="EW THE SUNSET", location="#hell", beauty="1")
        sunset3 = Sunset(img_url="https://files.explore.org/files/Sunsets_SantaMonicaBeach_LL.jpg",caption="JUST RIGHT SUNSET", location="meh-ville", beauty="5")
        db.session.add_all([sunset1, sunset2, sunset3])
        db.session.commit()

    def test_show(self):
        response = self.client.get('/sunsets/1')
        self.assertEqual(response.status_code, 200)

    def tearDown(self):
        db.drop_all()

    def test_index(self):
        response = self.client.get('/sunsets', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'JUST RIGHT SUNSET', response.data)
        self.assertIn(b'meh-ville', response.data)
        self.assertIn(b'EW THE SUNSET', response.data)



    # def test_create(self):
    #     response = self.client.post(
    #         '/snacks',
    #         data=dict(img_url="New", caption="Student", location=, beauty=),
    #         follow_redirects=True
    #     )
    #     self.assertIn(b'New Student', response.data)





    # def test_delete(self):
    #     response = self.client.delete(
    #         '/snacks/1?_method=DELETE',
    #         follow_redirects=True
    #     )
    #     self.assertNotIn(b'Hershey Chocolate', response.data)


if __name__ == '__main__':
    unittest.main()


