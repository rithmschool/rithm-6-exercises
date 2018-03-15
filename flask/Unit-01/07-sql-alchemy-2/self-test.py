from app import app, db, User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        user1 = User(first_name="Niki", last_name="Esfandiari")
        user2 = User(first_name="Miranda", last_name="Howitt")
        user3 = User(first_name="Whiskey", last_name="Lane")
        db.session.add_all([user1, user2, user3])
        message1 = Message(content="OMG this app does nothing!!", user_id=1)
        message2 = Message(content="WTF DO i do with this thing!!", user_id=1)
        message3 = Message(content="let me post crap!!", user_id=2)
        message4 = Message(
            content="gunicorn is not pronounced as G-unicorn!!", user_id=2)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_user_index(self):
        response = self.client.get('/users', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Niki', response.data)
        self.assertIn(b'Esfandiari', response.data)
        self.assertIn(b'Miranda', response.data)
        self.assertIn(b'Howitt', response.data)
        self.assertIn(b'Whiskey', response.data)
        self.assertIn(b'Lane', response.data)

    def test_user_show(self):
        response = self.client.get('/users/1')
        self.assertEqual(response.status_code, 200)

    def test_user_create(self):
        response = self.client.post(
            '/users',
            data=dict(first_name="Paula", last_name="Goylas"),
            follow_redirects=True)
        self.assertIn(b'Paula', response.data)
        self.assertIn(b'Goylas', response.data)

    def test_user_edit(self):
        response = self.client.get('/users/1/edit')
        self.assertIn(b'Niki', response.data)
        self.assertIn(b'Esfandiari', response.data)

    def test_user_update(self):
        response = self.client.patch(
            '/users',
            data=dict(first_name="user", last_name="changed"),
            follow_redirects=True)
        self.assertIn(b'user', response.data)
        self.assertIn(b'changed', response.data)
        self.assertNotIn(b'Niki', response.data)
        self.assertNotIn(b'Esfandiari', response.data)

    def test_user_delete(self):
        response = self.client.delete('/users/1', follow_redirects=True)
        self.assertNotIn(b'Niki', response.data)
        self.assertNotIn(b'Esfandiari', response.data)


# creating, reading, updating and deleting a user
# creating, reading, updating and deleting a message

if __name__ == '__main__':
    unittest.main()
