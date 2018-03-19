from app import app, db, User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = False
        return app

    def setUp(self):
        db.create_all()
        userTestA = User("Kelson", "Warner")
        userTestB = User("Jimmy", "Jones")
        userTestC = User("Test", "User")
        db.session.add_all([userTestA, userTestB, userTestC])
        messageTestA = Message(
            "Contrary to popular belief, Lorem Ipsum is not simply random text.", 1)
        messageTestB = Message(
            "It has roots in a piece of classical Latin literature from 45 BC", 2)
        messageTestC = Message("making it over 2000 years old.", 3)
        db.session.add_all([messageTestA, messageTestB, messageTestC])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def user_index(self):
        response = self.client.get(
            '/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Kelson Warner', response.data)
        self.assertIn(b'Jimmy Jones', response.data)
        self.assertIn(b'Test User', response.data)

    def user_show(self):
        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

    def user_create(self):
        response = self.client.post(
            '/users',
            data=dict(first_name="Cool", last_name="Dude",
                      follow_redirects=True)
        )
        self.assertIn(b'Cool Dude', response.data)

    def user_edit(self):
        response = self.client.get(
            '/users/1/edit'
        )
        self.assertIn(b'Kelson', response.data)
        self.assertIn(b'Warner', response.data)

    def user_update(self):
        response = self.client.patch(
            '/users/1',
            data=dict(first_name="Really", last_name="Cooldude"),
            follow_redirects=True
        )
        self.assertIn(b'Really Cooldude', response.data)
        self.assertNotIn(b'Kelson Warner', response.data)

    def user_delete(self):
        response = self.client.delete(
            '/users/3',
            follow_redirects=True
        )
        self.assertNotIn(b'Test User', response.data)

    def messages_index(self):
        response = self.client.get(
            '/users/2/messages',
            content_type='html/text',
            follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(
            b'It has roots in a piece of classical Latin literature from 45 BC', response.data)

    def messages_show(self):
        response = self.client.get('/users/1/messages/1')
        self.assertEqual(response.status_code, 200)

    def messages_create(self):
        response = self.client.post(
            '/users/1/messages',
            data=dict(content="testingmessage", user_id=3),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'testingmessage', response.data)

    def messages_edit(self):
        response = self.client.get('/users/1/messages/1/edit')
        self.assertEqual(response.status_code, 400)
        response = self.client.get('/users/2/messages/2/edit')
        self.assertIn(
            b'It has roots in a piece of classical Latin literature from 45 BC', response.data)

    def messages_update(self):
        response = self.client.get('/users/2/messages/2?_method=PATCH')
        self.assertEqual(response.status_code, 400)
        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(content="Lorem Ipsum is Weird"),
            follow_redirects=True)
        self.assertNotIn(
            b'It has roots in a piece of classical Latin literature from 45 BC', response.data)

    def messages_delete(self):
        response = self.client.delete(
            '/users/3/messages/3?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'making it over 2000 years old.', response.data)


if __name__ == '__main__':
    unittest.main()
