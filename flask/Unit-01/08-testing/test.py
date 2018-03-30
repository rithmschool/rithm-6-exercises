from app import app, db, User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = False
        return app

    def setUp(self):
        db.create_all()
        user1 = User("Mark", "Suzuki")
        user2 = User("Max", "Nawa")
        user3 = User("Hunter", "Casbeer")
        user4 = User("Jim", "Boolean")
        user5 = User("Yoyo", "Ma")
        user6 = User("Jim", "Lean")
        user7 = User("Ploopinmalop", "Yop")
        db.session.add_all([user1, user2, user3, user4, user5, user6, user7])
        message1 = Message("Mark spilled coffee on his laptop, haha", 1)
        message2 = Message("Max is maximum Max!", 2)
        message3 = Message("Hunter eats rice and chicken", 3)
        message4 = Message("This is a made up dude, dude", 4)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_users_index(self):
        response = self.client.get(
            '/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Mark Suzuki', response.data)
        self.assertIn(b'Max Nawa', response.data)
        self.assertIn(b'Hunter Casbeer', response.data)
        self.assertIn(b'Jim Boolean', response.data)
        self.assertIn(b'Yoyo Ma', response.data)
        self.assertIn(b'Jim Lean', response.data)
        self.assertIn(b'Ploopinmalop Yop', response.data)

    def test_users_show(self):
        response = self.client.get('/users/3')
        self.assertEqual(response.status_code, 200)

    def test_users_create(self):
        response = self.client.post(
            '/users',
            data=dict(first_name="Ghost", last_name="Person"),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Ghost', response.data)

    def test_users_edit(self):
        response = self.client.get('/users/4/edit')
        self.assertIn(b'Jim', response.data)
        self.assertNotIn(b'Yoseph', response.data)

    def test_users_update(self):
        response = self.client.patch(
            '/users/4?_method=PATCH',
            data=dict(first_name="thisguyusedtobe", last_name="JIMBOOLEAN!!"),
            follow_redirects=True)
        self.assertNotIn(b'Jim Boolean', response.data)
        self.assertIn(b'thisguyusedtobe JIMBOOLEAN!!', response.data)

    def test_users_delete(self):
        response = self.client.delete(
            '/users/5?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Yoyo Ma', response.data)

    def test_messages_index(self):
        response = self.client.get(
            '/users/3/messages',
            content_type='html/text',
            follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Hunter eats rice and chicken', response.data)

    def test_messages_show(self):
        response = self.client.get('/users/2/messages/5')
        self.assertEqual(response.status_code, 400)

    def test_messages_create(self):
        response = self.client.post(
            '/users/2/messages',
            data=dict(content="maximummax", user_id=2),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'maximummax', response.data)
        self.assertNotIn(b'yurwoefkaowefkapwoe', response.data)

    def test_messages_edit(self):
        response = self.client.get('/users/2/messages/5/edit')
        self.assertEqual(response.status_code, 400)

        response = self.client.get('/users/4/messages/4/edit')
        self.assertIn(b'This is a made up dude, dude', response.data)

        response = self.client.get('/users/1/messages/1/edit')
        self.assertIn(b'Mark spilled coffee on his laptop, haha',
                      response.data)

    def test_messages_update(self):
        response = self.client.get('/users/3/messages/1?_method=PATCH')
        self.assertEqual(response.status_code, 400)

        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(content="Back when Mark Wahlberg was Marky Mark"),
            follow_redirects=True)
        self.assertNotIn(b'Marklarky', response.data)

    def test_messages_delete(self):
        response = self.client.delete(
            '/users/1/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Mark spilled coffee on his laptop, haha',
                         response.data)


if __name__ == '__main__':
    unittest.main()
from app import app, db, User, Message
from flask_testing import TestCase
import unittest


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = False
        return app

    def setUp(self):
        db.create_all()
        user1 = User("Mark", "Suzuki")
        user2 = User("Max", "Nawa")
        user3 = User("Hunter", "Casbeer")
        user4 = User("Jim", "Boolean")
        user5 = User("Yoyo", "Ma")
        user6 = User("Jim", "Lean")
        user7 = User("Ploopinmalop", "Yop")
        db.session.add_all([user1, user2, user3, user4, user5, user6, user7])
        message1 = Message("Mark spilled coffee on his laptop, haha", 1)
        message2 = Message("Max is maximum Max!", 2)
        message3 = Message("Hunter eats rice and chicken", 3)
        message4 = Message("This is a made up dude, dude", 4)
        db.session.add_all([message1, message2, message3, message4])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_users_index(self):
        response = self.client.get(
            '/users', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Mark Suzuki', response.data)
        self.assertIn(b'Max Nawa', response.data)
        self.assertIn(b'Hunter Casbeer', response.data)
        self.assertIn(b'Jim Boolean', response.data)
        self.assertIn(b'Yoyo Ma', response.data)
        self.assertIn(b'Jim Lean', response.data)
        self.assertIn(b'Ploopinmalop Yop', response.data)

    def test_users_show(self):
        response = self.client.get('/users/3')
        self.assertEqual(response.status_code, 200)

    def test_users_create(self):
        response = self.client.post(
            '/users',
            data=dict(first_name="Ghost", last_name="Person"),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Ghost', response.data)

    def test_users_edit(self):
        response = self.client.get('/users/4/edit')
        self.assertIn(b'Jim', response.data)
        self.assertNotIn(b'Yoseph', response.data)

    def test_users_update(self):
        response = self.client.patch(
            '/users/4?_method=PATCH',
            data=dict(first_name="thisguyusedtobe", last_name="JIMBOOLEAN!!"),
            follow_redirects=True)
        self.assertNotIn(b'Jim Boolean', response.data)
        self.assertIn(b'thisguyusedtobe JIMBOOLEAN!!', response.data)

    def test_users_delete(self):
        response = self.client.delete(
            '/users/5?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Yoyo Ma', response.data)

    def test_messages_index(self):
        response = self.client.get(
            '/users/3/messages',
            content_type='html/text',
            follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Hunter eats rice and chicken', response.data)

    def test_messages_show(self):
        response = self.client.get('/users/2/messages/5')
        self.assertEqual(response.status_code, 400)

    def test_messages_create(self):
        response = self.client.post(
            '/users/2/messages',
            data=dict(content="maximummax", user_id=2),
            follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'maximummax', response.data)
        self.assertNotIn(b'yurwoefkaowefkapwoe', response.data)

    def test_messages_edit(self):
        response = self.client.get('/users/2/messages/5/edit')
        self.assertEqual(response.status_code, 400)

        response = self.client.get('/users/4/messages/4/edit')
        self.assertIn(b'This is a made up dude, dude', response.data)

        response = self.client.get('/users/1/messages/1/edit')
        self.assertIn(b'Mark spilled coffee on his laptop, haha',
                      response.data)

    def test_messages_update(self):
        response = self.client.get('/users/3/messages/1?_method=PATCH')
        self.assertEqual(response.status_code, 400)

        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(content="Back when Mark Wahlberg was Marky Mark"),
            follow_redirects=True)
        self.assertNotIn(b'Marklarky', response.data)

    def test_messages_delete(self):
        response = self.client.delete(
            '/users/1/messages/1?_method=DELETE', follow_redirects=True)
        self.assertNotIn(b'Mark spilled coffee on his laptop, haha',
                         response.data)


if __name__ == '__main__':
    unittest.main()
