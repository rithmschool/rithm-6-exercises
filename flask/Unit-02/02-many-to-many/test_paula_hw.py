from project import app, db, bcrypt
from project.models import User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///:memory:'
        app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = False
        return app

    def setUp(self):
        db.create_all()
        user1 = User(
            username="Elie Schoppik",
            first_name="Elie",
            last_name="Schoppik",
            password=bcrypt.generate_password_hash("password").decode('UTF-8'))
        user2 = User(
            username="Tim Garcia",
            first_name="Tim",
            last_name="Garcia",
            password=bcrypt.generate_password_hash("password").decode('UTF-8'))
        user3 = User(
            username="Matt Lane",
            first_name="Matt",
            last_name="Lane",
            password=bcrypt.generate_password_hash("password").decode('UTF-8'))
        db.session.add_all([user1, user2, user3])
        message1 = Message(content="Hello Elie!!", user_id=1)
        message2 = Message(content="Goodbye Elie!!", user_id=1)
        message3 = Message(content="Hello Tim!!", user_id=2)
        message4 = Message(content="Goodbye Tim!!", user_id=2)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def login(self, username, password):
        return self.client.post(
            '/users/login',
            data=dict(username=username, password=password),
            follow_redirects=True)

    def test_users_index(self):
        response = self.client.get(
            '/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Elie Schoppik', response.data)
        self.assertIn(b'Tim Garcia', response.data)
        self.assertIn(b'Matt Lane', response.data)

    def test_users_show(self):
        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

    def test_users_create(self):
        response = self.client.post(
            '/users/',
            data=dict(
                username="Awesome Student",
                first_name="Awesome",
                last_name="Student",
                password="password"),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Awesome', response.data)
        self.assertIn(b'User Created!', response.data)

    def test_users_edit(self):
        self.login('Elie Schoppik', 'password')
        response = self.client.get('/users/1/edit', follow_redirects=True)
        self.assertIn(b'Elie', response.data)
        self.assertIn(b'Schoppik', response.data)

    def test_users_update(self):
        response = self.client.patch(
            '/users/1?_method=PATCH',
            data=dict(
                username="updated information",
                first_name="updated",
                last_name="information"),
            follow_redirects=True)
        self.assertIn(b'updated information', response.data)
        self.assertNotIn(b'Elie Schoppik', response.data)

    def test_users_delete(self):
        response = self.client.delete(
            '/users/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Elie Schoppik', response.data)

    #### TESTS FOR MESSAGES ####

    def test_messages_index(self):
        response = self.client.get(
            '/users/1/messages',
            content_type='html/text',
            follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Hello Elie!!', response.data)
        self.assertIn(b'Goodbye Elie!!', response.data)

    def test_messages_show(self):
        response = self.client.get(
            '/users/1/messages/1', follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_messages_create(self):
        response = self.client.post(
            '/users/1/messages/',
            data=dict(text="Hi Matt!!", user_id=3),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_messages_edit(self):
        self.login('Elie Schoppik', 'password')
        response = self.client.get('/users/1/messages/1/edit')
        self.assertIn(b'Hello Elie!!', response.data)

        response = self.client.get('/users/2/messages/4/edit')
        self.assertNotIn(b'Goodbye Tim!!', response.data)

    def test_messages_update(self):
        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(text="Welcome Back Elie!"),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)

    def test_messages_delete(self):
        response = self.client.delete(
            '/users/1/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Hello Elie!!', response.data)


if __name__ == '__main__':
    unittest.main()
