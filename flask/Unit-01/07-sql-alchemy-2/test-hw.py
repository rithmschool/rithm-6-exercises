from app import app, db, User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///test-hw.db'
        return app

    def setUp(self):
        db.create_all()
        user1 = User(first_name="Sailor", last_name="Moon")
        user2 = User(first_name="Sailor", last_name="Jupiter")
        user3 = User(first_name="Sailor", last_name="Mercury")
        db.session.add_all([user1, user2, user3])
        message1 = Message(
            content="In the name of the moon, I wish punish you", user_id=1)
        message2 = Message(content="Moon Tiara Action!", user_id=1)
        message3 = Message(content="Supreme Thunder!", user_id=2)
        message4 = Message(content="Bubble Blast!!", user_id=2)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()


def tearDown(self):
    db.drop_all()


def test_users_index(self):
    response = self.client.get(
        '/users', content_type='html/text', follow_redirects=True)
    # self.assertLess(response.status_code, 400)
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Sailor Moon', response.data)
    self.assertIn(b'Sailor Jupiter', response.data)
    self.assertIn(b'Sailor Mercury', response.data)


def test_users_show(self):
    response = self.client.get('/users/1')
    self.assertEqual(response.status_code, 200)


def test_users_create(self):
    response = self.client.post(
        '/users',
        data=dict(first_name="Sailor", last_name="Mars"),
        follow_redirects=True)
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Sailor', response.data)
    self.assertIn(b'Mars', response.data)


def test_users_edit(self):
    response = self.client.get('/users/1/edit')
    self.assertIn(b'Sailor', response.data)
    self.assertIn(b'Moon', response.data)


def test_users_update(self):
    response = self.client.patch(
        '/users/1?_method=PATCH',
        data=dict(first_name="updated", last_name="information"),
        follow_redirects=True)
    self.assertIn(b'updated information', response.data)
    self.assertNotIn(b'Sailor Moon', response.data)


def test_users_delete(self):
    response = self.client.delete(
        '/users/1?_method=DELETE', follow_redirects=True)
    self.assertNotIn(b'Sailor Moon', response.data)


def test_messages_index(self):
    response = self.client.get(
        '/users/1/messages', content_type='html/text', follow_redirects=True)
    self.assertLess(response.status_code, 400)
    self.assertIn(b'In the name of the moon, I wish punish you', response.data)
    self.assertIn(b'Moon Tiara Action!', response.data)


def test_messages_show(self):
    response = self.client.get('/users/1/messages/1', follow_redirects=True)
    self.assertEqual(response.status_code, 200)


def test_messages_create(self):
    response = self.client.post(
        '/users/1/messages',
        data=dict(content="Hi Tuxedo Mask!", user_id=3),
        follow_redirects=True)
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Hi Tuxedo Mask!', response.data)


def test_messages_edit(self):
    response = self.client.get('/users/1/messages/1/edit')
    self.assertIn(b'In the name of the moon, I wish punish you', response.data)

    response = self.client.get('/users/2/messages/3/edit')
    self.assertIn(b'Supreme Thunder!', response.data)

    response = self.client.get('/users/2/messages/4/edit')
    self.assertIn(b'Bubble Blast!!', response.data)


def test_messages_update(self):
    response = self.client.patch(
        '/users/1/messages/1?_method=PATCH',
        data=dict(content="Hi Luna!"),
        follow_redirects=True)
    self.assertIn(b'Hi Luna!', response.data)


def test_messages_delete(self):
    response = self.client.delete(
        '/users/1/messages/1?_method=DELETE', follow_redirects=True)
    self.assertNotIn(b'In the name of the moon, I wish punish you',
                     response.data)


if __name__ == '__main__':
    unittest.main()
