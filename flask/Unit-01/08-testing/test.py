from app import app, db, User, Message
from flask_testing import TestCase
import unittest

class UserMessageTestCase(TestCase):
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

    def test_create_user(self):
        response = self.client.get('/users', content_type='html/text')
        self.assertLess(response.status_code, 400)
        self.assertIn(b'John Doe', response.data)
        self.assertIn(b'Jane Doe_1', response.data)
        self.assertIn(b'test', response.data)

# USER TESTS

    def test_delete_user(self):
        response = self.client.delete('/users/1', follow_redirects=True)
        from IPython import embed; embed()
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'John', response.data)
        self.assertIn(b'Doe', response.data)



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
