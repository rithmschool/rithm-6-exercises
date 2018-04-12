from project import app, db
from project.models import User
from project.models import Message
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        user1 = User(first_name='Karl', last_name='Secco')
        user2 = User(first_name='Morgan', last_name='Freeman')
        db.session.add_all([user1, user2])
        message1 = Message(content='Let\'s Eat!', user_id=1)
        message2 = Message(content='No Let\'s Narrate..', user_id=1)
        db.session.add_all([message1, message2])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    #### TESTS FOR USERS ####

    def test_users_index(self):
        response = self.client.get('/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Karl', response.data)
        self.assertIn(b'Freeman', response.data)

    def test_users_show(self):
        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

    def test_users_create(self):
        response = self.client.post(
            '/users',
            data=dict(first_name='Vin', last_name='Diesel'),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Vin', response.data)
        self.assertIn(b'User Created!', response.data)

    def test_users_edit(self):
        response = self.client.get(
            '/users/1/edit'
        )
        self.assertIn(b'Karl', response.data)
        self.assertIn(b'Secco', response.data)

    def test_users_update(self):
        response = self.client.patch(
            '/users/1?_method=PATCH',
            data=dict(first_name='Morgan', last_name='Diesel'),
            follow_redirects=True
        )
        self.assertIn(b'Morgan Diesel', response.data)
        self.assertNotIn(b'Karl Secco', response.data)

    def test_users_delete(self):
        response = self.client.delete(
            '/users/1?_method=DELETE',
            follow_redirects=True
        )
        self.assertNotIn(b'Karl Secco', response.data)

    #### TESTS FOR MESSAGES ####

    def test_messages_index(self):
        response = self.client.get('/users/1/messages', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Eat', response.data)
        self.assertIn(b'Narrate', response.data)

    def test_messages_show(self):
        response = self.client.get('/users/1/messages/1')
        self.assertEqual(response.status_code, 405)

    def test_messages_create(self):
        response = self.client.post(
            '/users/2/messages',
            data=dict(content='Once upon a time...', user_id=2),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Once', response.data)

    def test_messages_edit(self):
        response = self.client.get(
            '/users/1/messages/1/edit'
        )
        self.assertIn(b'Eat', response.data)

        response = self.client.get(
            '/users/1/messages/2/edit'
        )
        self.assertNotIn(b'time...', response.data)

    def test_messages_update(self):
        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(content='So about this eating thing...'),
            follow_redirects=True
        )
        self.assertIn(b'eating', response.data)

    def test_messages_delete(self):
        response = self.client.delete(
            '/users/1/messages/1?_method=DELETE',
            follow_redirects=True
        )
        self.assertNotIn(b'eating', response.data)


if __name__ == '__main__':
    unittest.main()
