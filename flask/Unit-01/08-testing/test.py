from app import app, db, User, Message
from flask_testing import TestCase
import unittest

class UserMessageTestCase(TestCase):
# HOUSE KEEPING TESTING FUNCTIONS
    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.drop_all()
        db.create_all()
        user1 = User(first_name = 'John', last_name = 'Doe', image_url = 'test')
        user2 = User(first_name = 'Jane', last_name = 'Doe_1', image_url = 'test')
        user3 = User(first_name = 'Jane', last_name = 'Doe_2', image_url = 'test')
        db.session.add_all([user1, user2, user3])
        message1 = Message(content = 'Test message 11', user_id = 1)
        message2 = Message(content = 'Test message 12', user_id = 1)
        message3 = Message(content = 'Test message 2', user_id = 2)
        message4 = Message(content = 'Test message 3', user_id = 3)
        db.session.add_all([message1, message2, message3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

# USER TESTS

    def test_create_read_user(self):
        response = self.client.get('/users', content_type='html/text')
        self.assertLess(response.status_code, 400)
        self.assertIn(b'John Doe', response.data)
        self.assertIn(b'Jane Doe_1', response.data)
        self.assertIn(b'test', response.data)

    def test_update_user(self):
        response_1 = self.client.get('/users/1/edit')
        self.assertEqual(response_1.status_code, 200)
        self.assertIn(b'John', response_1.data)
        self.assertIn(b'Doe', response_1.data)

        response_2 = self.client.patch('/users/1?_method=PATCH', data = dict( first_name = 'NoFirstName', last_name = 'NoLastName', image_url = "NewUrl"), follow_redirects=False)
        self.assertEqual(response_2.status_code, 302)
        
        response_3 = self.client.patch('/users/1?_method=PATCH', data = dict( first_name = 'NoFirstName', last_name = 'NoLastName', image_url = "NewUrl"), follow_redirects=True)
        self.assertEqual(response_3.status_code, 200)
        self.assertIn(b'NoFirstName', response_3.data)
        self.assertIn(b'NoLastName', response_3.data)
        self.assertIn(b'NewUrl', response_3.data)

    def test_delete(self):
        response = self.client.delete('/users/1?_method=DELETE', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Jane Doe_1', response.data)
        self.assertIn(b'Jane Doe_2', response.data)

# MESSAGE TESTS

    def test_create_read_message(self):
        response_1 = self.client.get('/users/1/messages', content_type='html/text')
        self.assertEqual(response_1.status_code, 200)
        self.assertIn(b'Test message 11', response_1.data)
        self.assertIn(b'Test message 12', response_1.data)
        response_2 = self.client.get('/users/2/messages', content_type='html/text')
        self.assertEqual(response_2.status_code, 200)
        self.assertIn(b'Test message 2', response_2.data)

    def test_update_message(self):
        response_1 = self.client.get('/users/1/messages/1/edit')
        self.assertEqual(response_1.status_code, 200)
        self.assertIn(b'Test message 11', response_1.data)

        response_2 = self.client.patch('/users/1/messages/2', data = dict( content = 'NewContent', user_id = 1), follow_redirects=True)
        self.assertEqual(response_2.status_code, 200)
        self.assertIn(b'Test message 12', response_2.data)

    def test_delete_message(self):
        response_1 = self.client.delete('/users/1/messages/2', follow_redirects=True)
        self.assertEqual(response_1.status_code, 200)
        self.assertIn(b'Test message 12', response_1.data)
        
        self.client.delete('/users/3', follow_redirects=True)
        response_2 = self.client.get('/users/3/messages/4', follow_redirects=True)
        self.assertEqual(response_2.status_code, 404)
        self.assertNotIn(b'Test message 3', response_2.data)    

# 404 TESTS

    def test_404(self):
        response_1 = self.client.get('/use')
        self.assertEqual(response_1.status_code, 404)
        response_2 = self.client.get('/users/4')
        self.assertEqual(response_2.status_code, 404)
        response_3 = self.client.get('/users/4/mess/')
        self.assertEqual(response_3.status_code, 404)
        response_4 = self.client.get('/users/4/messages/5')
        self.assertEqual(response_4.status_code, 404)


if __name__ == '__main__':
    unittest.main()
