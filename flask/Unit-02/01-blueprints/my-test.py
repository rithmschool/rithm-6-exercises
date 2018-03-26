from project import app, db
from project.users.models import User
from project.messages.models import Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        user1 = User("A", "B")
        user2 = User("C", "D")
        user3 = User("E", "F")
        db.session.add_all([user1, user2, user3])
        message1 = Message("a b", 1)
        message2 = Message("c d", 1)
        message3 = Message("e f", 2)
        message4 = Message("g h", 2)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_users_index(self):
        response = self.client.get(
            '/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'A B', response.data)
        self.assertIn(b'C D', response.data)
        self.assertIn(b'E F', response.data)

    def test_users_show(self):
        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

    def test_users_create(self):
        with self.client:
            response = self.client.post(
                '/users/',
                data=dict(first_name="X", last_name="Y"),
                follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'X', response.data)
        self.assertIn(b'User Created!', response.data)

    def test_users_edit(self):
        response = self.client.get('/users/1/edit')
        self.assertIn(b'A', response.data)
        self.assertIn(b'B', response.data)

    def test_users_update(self):
        with self.client:
            response = self.client.patch(
                '/users/1?_method=PATCH',
                data=dict(first_name="p", last_name="q"),
                follow_redirects=True)
        self.assertIn(b'p q', response.data)
        self.assertNotIn(b'A B', response.data)

    def test_users_delete(self):
        with self.client:
            response = self.client.delete(
                '/users/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'A SchopBpik', response.data)

    #### TESTS FOR MESSAGES ####

    def test_messages_index(self):
        response = self.client.get(
            '/users/1/messages',
            content_type='html/text',
            follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'a b', response.data)
        self.assertIn(b'c d', response.data)

    def test_messages_show(self):
        response = self.client.get('/users/1/messages/1')
        self.assertEqual(response.status_code, 200)

    def test_messages_create(self):
        with self.client:
            response = self.client.post(
                '/users/1/messages/',
                data=dict(content="Hi Mate!!", user_id=3),
                follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Hi Mate!!', response.data)

    def test_messages_edit(self):
        response = self.client.get('/users/1/messages/1/edit')
        self.assertIn(b'a b', response.data)

        response = self.client.get('/users/2/messages/4/edit')
        self.assertIn(b'g h', response.data)

    def test_messages_update(self):
        with self.client:
            response = self.client.patch(
                '/users/1/messages/1?_method=PATCH',
                data=dict(content="hh"),
                follow_redirects=True)
        self.assertIn(b'hh', response.data)

    def test_messages_delete(self):
        with self.client:
            response = self.client.delete(
                '/users/1/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'a b', response.data)


if __name__ == '__main__':
    unittest.main()
