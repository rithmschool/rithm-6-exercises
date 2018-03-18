from IPython import embed
from app import app, db, User, Message
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        """ Setting up information in Database"""

        db.create_all()
        user1 = User("Steve", "Jobs", "https://en.wikipedia.org/wiki/Steve_Jobs#/media/File:Steve_Jobs_Headshot_2010-CROP.jpg")
        user2 = User("Steve", "Wozniak", "https://en.wikipedia.org/wiki/Steve_Wozniak#/media/File:Steve_Wozniak_by_Gage_Skidmore.jpg")
        user3 = User("Tim", "Cook", "https://en.wikipedia.org/wiki/Tim_Cook#/media/File:Tim_Cook_2009_cropped.jpg")
        user4 = User("Jony", "Ive", "https://en.wikipedia.org/wiki/Jonathan_Ive#/media/File:Jonathan_Ive_(OTRS).jpg")
        db.session.add_all([user1, user2, user3, user4])
        message1 = Message("SJ Apple 1", 1)
        message2 = Message("SW Apple 2", 2)
        message3 = Message("TC iPhone 3", 3)
        message4 = Message("TC iPad 3", 3)
        message5 = Message("JI iPhone 4", 4)
        message6 = Message("JI iPad 4", 4)
        db.session.add_all([message1, message2, message3, message4, message5, message6])
        db.session.commit()

    def tearDown(self):
        """Deleting information from Database """

        db.drop_all()

################### Testing Users View Functions #########################

    def test_root_get(self):
        """Testing root is redirected to index_users"""

        response = self.client.get('/', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Steve Jobs', response.data)
        self.assertIn(b'Steve Wozniak', response.data)
        self.assertIn(b'Tim Cook', response.data)
        self.assertIn(b'Jony Ive', response.data)

    def test_index_users_get(self):
        """Testing users are displayed on home page"""

        response = self.client.get('/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Steve Jobs', response.data)
        self.assertIn(b'Steve Wozniak', response.data)
        self.assertIn(b'Tim Cook', response.data)
        self.assertIn(b'Jony Ive', response.data)

    def test_show_users_get(self):
        """Testing standard response for successful user HTTP requests"""

        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

        response = self.client.get('/users/2')
        self.assertEqual(response.status_code, 200)

    def test_index_users_post(self):
        """Testing new user is created successfully"""

        response = self.client.post('/users', data=dict(first_name="Bill", last_name="Gates", image_url=""), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Bill Gates', response.data)

        response = self.client.post('/users', data=dict(first_name="Jude", last_name="Law", image_url=""), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Jude Law', response.data)

    def test_edit_users_get(self):
        """Testing user information is displayed successfully during editing"""

        response = self.client.get('/users/1/edit')
        self.assertIn(b'Steve', response.data)
        self.assertIn(b'Jobs', response.data)

        response = self.client.get('/users/2/edit')
        self.assertIn(b'Steve', response.data)
        self.assertIn(b'Wozniak', response.data)

    def test_show_users_patch(self):
        """Testing user information is updated successfully"""

        response = self.client.patch('/users/1?_method=PATCH', data=dict(first_name="Jackie", last_name="Chan", image_url=""), follow_redirects=True)
        self.assertIn(b'Jackie Chan', response.data)
        self.assertNotIn(b'Steve Jobs', response.data)

        response = self.client.patch('/users/3?_method=PATCH', data=dict(first_name="Donald", last_name="Duck", image_url=""), follow_redirects=True)
        self.assertIn(b'Donald Duck', response.data)
        self.assertNotIn(b'Tim Cook', response.data)

    def test_show_users_delete(self):
        """Testing user information is deleted successfully"""

        response = self.client.delete('/users/2?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Steve Wozniak', response.data)

        response = self.client.delete('/users/3?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Tim Cook', response.data)


################### Testing Message View Functions #########################

    def test_index_messages_get(self):
        """Testing messages are displayed for corresponding user"""

        response = self.client.get('/users/3/messages', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'TC iPhone 3', response.data)
        self.assertIn(b'TC iPad 3', response.data)

        response = self.client.get('/users/4/messages', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'JI iPhone 4', response.data)
        self.assertIn(b'JI iPad 4', response.data)

    def test_show_messages_get(self):
        """Testing standard response for successful message HTTP requests"""

        response = self.client.get('/users/3/messages/1')
        self.assertEqual(response.status_code, 200)

        response = self.client.get('/users/4/messages/2')
        self.assertEqual(response.status_code, 200)

    def test_index_messages_post(self):
        """Testing new message is created successfully"""

        response = self.client.post('/users/4/messages', data=dict(content="JI iWatch 5", user_id=4), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'JI iWatch 5', response.data)

    def test_edit_messages_get(self):
        """Testing message content is displayed successfully during editing"""

        response = self.client.get('/users/1/messages/1/edit')
        self.assertIn(b'SJ Apple 1', response.data)

        response = self.client.get('/users/1/messages/2/edit')
        self.assertIn(b'SW Apple 2', response.data)

    def test_show_messages_patch(self):
        """Testing messages are updated successfully"""

        response = self.client.patch('/users/1/messages/1?_method=PATCH', data=dict(content="NEXT Computers"), follow_redirects=True)
        self.assertIn(b'NEXT Computers', response.data)

        response = self.client.patch('/users/2/messages/2?_method=PATCH', data=dict(content="Retired Hacker"), follow_redirects=True)
        self.assertIn(b'Retired Hacker', response.data)

    def test_show_messages_delete(self):
        """Testing messages are deleted successfully"""

        response = self.client.delete('/users/1/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'SJ Apple 1', response.data)

        response = self.client.delete('/users/2/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'SW Apple 2', response.data)

################### Testing 404 Functions #########################

    def test_404_reponse(self):
        """Testing 404 not found response for invalid url"""

        response = self.client.get('/users/junk', follow_redirects=True)
        self.assertEqual(response.status_code, 404)

if __name__ == '__main__':
    unittest.main()
