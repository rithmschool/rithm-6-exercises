from app import app, db, Pizza
from flask_testing import TestCase
import unittest

class TestPizza(TestCase):

    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        pizza1 = Pizza(img_url='http://zeldasgourmetpizza.com/images/pizzamass.jpg', caption='sick slice', location='Sacramento, CA', beauty=8)
        pizza2 = Pizza(img_url='https://www.totalhappyhour.com/preview/500-450/content/files/mod.happyhour/5db946130b57444a8c65859b8f42abd1.jpg', caption='deep dish', location='San Francisco, CA', beauty=10)
        pizza3 = Pizza(img_url='https://cdn.shopify.com/s/files/1/0808/5563/products/prod-pizza-sheeps-milk-slice-lg.jpg?v=1503592517', caption='gluten-free goody-two-shoes', location='Sacramento, CA', beauty=6)
        db.session.add_all([pizza1, pizza2, pizza3])
        db.session.commit()

    def tearDown(self):
        db.drop_all()

    def test_index(self):
        response = self.client.get('/pizza', content_type='html/text')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'sick slice', response.data)
        self.assertIn(b'Sacramento, CA', response.data)
        self.assertIn(b'gluten-free', response.data)

    def test_destroy(self):
        with self.client:
            response1 = self.client.delete('/pizza/1')
            response2 = self.client.get('/pizza/1')
            self.assertEqual(response1.status_code, 302)
            self.assertEqual(response2.status_code, 405)

    def test_create(self):
        with self.client:
            response1 = self.client.post(
            '/pizza',
            data=dict(img_url='http://zeldasgourmetpizza.com/images/pizzamass.jpg', caption='', location='', beauty=8),
            follow_redirects=True
        )
            response2 = self.client.post(
            '/pizza',
            data=dict(img_url='https://cdn.shopify.com/s/files/1/0808/5563/products/prod-pizza-sheeps-milk-slice-lg.jpg?v=1503592517', caption='a slice of heaven', location='pearly gates', beauty=10),
            follow_redirects=True
        )
        self.assertIn(b'http://zeldasgourmetpizza.com/images/pizzamass.jpg', response1.data)
        self.assertIn(b'http://zeldasgourmetpizza.com/images/pizzamass.jpg', response2.data)

if __name__ == '__main__':
    unittest.main()
