from project import app,db
from project.users.models import User
from project.messages.models import Message
from project.tags.models import Tag
from flask_testing import TestCase
import unittest

class BaseTestCase(TestCase):
    def create_app(self):
        app.config['WTF_CSRF_ENABLED'] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.drop_all()
        db.create_all()
        user1 = User(first_name = "Elie", last_name = "Schoppik")
        user2 = User(first_name = "Tim", last_name = "Garcia")
        user3 = User(first_name = "Matt", last_name = "Lane")
        db.session.add_all([user1, user2, user3])
        message1 = Message(content = "Hello Elie!!", user_id = 1)
        message2 = Message(content = "Goodbye Elie!!", user_id = 1)
        message3 = Message(content = "Hello Tim!!", user_id = 2)
        message4 = Message(content = "Goodbye Tim!!", user_id = 2)
        db.session.add_all([message1, message2, message3,message4])
        tag1 = Tag(content = "test_tag_1")
        tag2 = Tag(content = "test_tag_2")
        tag3 = Tag(content = "test_tag_3")
        db.session.add_all([tag1, tag2])
        message1.tags.extend([tag1, tag2])
        message3.tags.extend([tag3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_users_index(self):
        response = self.client.get('/users', content_type='html/text', follow_redirects=True)
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
            data=dict(first_name="Awesome", last_name="Student"),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Awesome', response.data)
        self.assertIn(b'User Created!', response.data)

    def test_users_edit(self):
        response = self.client.get(
            '/users/1/edit'
        )
        self.assertIn(b'Elie', response.data)
        self.assertIn(b'Schoppik', response.data)

    def test_users_update(self):
        response = self.client.patch(
            '/users/1?_method=PATCH',
            data=dict(first_name="updated", last_name="information"),
            follow_redirects=True
        )
        self.assertIn(b'updated', response.data)
        self.assertIn(b'information', response.data)
        self.assertNotIn(b'Elie Schoppik', response.data)

    def test_users_delete(self):
        response = self.client.delete(
            '/users/1?_method=DELETE',
            follow_redirects=True
        )
        self.assertNotIn(b'Elie Schoppik', response.data)

    #### TESTS FOR MESSAGES ####

    def test_messages_index(self):
        response = self.client.get('/users/1/messages', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'Hello Elie!!', response.data)
        self.assertIn(b'Goodbye Elie!!', response.data)

    def test_messages_show(self):
        response = self.client.get('/users/1/messages/1')
        self.assertEqual(response.status_code, 200)

    def test_messages_create(self):
        response = self.client.post(
            '/users/1/messages/',
            data=dict(text="Hi Matt!!", user_id=3),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)

    def test_messages_edit(self):
        response = self.client.get(
            '/users/1/messages/1/edit'
        )
        self.assertIn(b'Hello Elie!!', response.data)

        response = self.client.get(
            '/users/2/messages/4/edit'
        )
        self.assertIn(b'Goodbye Tim!!', response.data)

    def test_messages_update(self):
        response = self.client.patch(
            '/users/1/messages/1?_method=PATCH',
            data=dict(content="Welcome Back Elie!"),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)

    def test_messages_delete(self):
        response = self.client.delete(
            '/users/1/messages/1?_method=DELETE',
            follow_redirects=True
        )
        self.assertNotIn(b'Hello Elie!!', response.data)

#### TESTS FOR TAGS ####

    def test_tag_index(self):
        response = self.client.get('/tags', content_type='html/text', follow_redirects=True)
        self.assertLess(response.status_code, 400)
        self.assertIn(b'test_tag_1', response.data)
        self.assertIn(b'test_tag_2', response.data)
  
    def test_tags_in_messages_index(self):
        response = self.client.get('/users/1/messages', follow_redirects = True)
        self.assertIn(b'test_tag_1', response.data)
        self.assertIn(b'test_tag_2', response.data)

    def test_tags_show(self):
        response = self.client.get('/tags/3')
        self.assertEqual(response.status_code, 200)

    def test_tags_in_messages_show(self):
        response = self.client.get('/users/2/messages/3')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test_tag_3', response.data)

    def test_tags_create(self):
        response = self.client.post(
            '/tags/',
            data=dict(content="test_tag_4"),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'test_tag_4', response.data)

    def test_add_tag_to_message(self):
        response = self.client.get(
            '/users/1/messages/new',
            follow_redirects=True
        )
        self.assert_200(response)
        self.assertIn(b'test_tag_1', response.data)
        self.assertIn(b'test_tag_2', response.data)
        self.assertIn(b'test_tag_3', response.data)

    def test_tags_edit(self):
        response = self.client.get(
            '/tags/1'
        )
        self.assertIn(b'test_tag_1', response.data)

        response = self.client.get(
            '/tags/3'
        )
        self.assertIn(b'test_tag_3', response.data)

    def test_edit_tag_on_message(self):
        response = self.client.get(
            '/users/1/messages/4/edit',
            follow_redirects=True
        )
        self.assert_200(response)
        self.assertIn(b'test_tag_1', response.data)
        self.assertIn(b'test_tag_2', response.data)
        self.assertIn(b'test_tag_3', response.data)

    def test_tags_update(self):
        response = self.client.patch(
            '/tags/2?_method=PATCH',
            data=dict(content="update_tag"),
            follow_redirects=True
        )
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'update_tag', response.data)

    def test_tags_delete(self):
        response = self.client.delete(
            '/tags/1?_method=DELETE',
            follow_redirects=True
        )
        self.assertNotIn(b'test_tag_1', response.data)

if __name__ == '__main__':
    unittest.main()
