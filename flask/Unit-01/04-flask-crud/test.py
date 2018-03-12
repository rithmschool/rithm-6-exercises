from snack import Snack
from app import app, snack_lists
import unittest


class TestSnackMethods(unittest.TestCase):

    def setUp(self):
        snakcks.append(Snack('snickers', 'chocolate'))
        snacks.append(Snack('skittles', 'candy'))

    def tearDown(self):
        snacks.clear()
        Snack.id = 1

    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/snacks', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_new(self):
        tester = app.test_client(self)
        response = tester.get('/snacks/new', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_edit(self):
        tester = app.test_client(self)
        response = tester.get('/snacks/1', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_show(self):
        tester = app.test_client(self)
        response = tester.get('/snacks/1/edit', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_creating_snack(self):
        tester = app.test_client(self)
        tester.post('/snacks',
                    data=dict(name="hersheys", kind="chocolate"), follow_redirects=True)
        self.assertEqual(snackst[2].id, 3)
        self.assertEqual(snacks[2].name, 'hersheys')
        self.assertEqual(snacks[2].kind, 'chocolate')
        self.assertEqual(len(snackst), 3)

    def test_editing_snack(self):
        tester = app.test_client(self)
        tester.post('/snacks/1?_method=PATCH',
                    data=dict(name="almond_snickers", kind="almonds_and_chocolate"), follow_redirects=True)
        self.assertEqual(snacks[0].name, 'almond_snickers')
        self.assertEqual(snacks[0].kind, 'almonds_and_chocolate')
        self.assertEqual(len(snacks), 2)

    def test_deleting_snack(self):
        tester = app.test_client(self)
        tester.post('/snacks/1?_method=DELETE', follow_redirects=True)
        tester.post('/snacks/2?_method=DELETE', follow_redirects=True)
        self.assertEqual(len(snacks), 0)


if __name__ == '__main__':
    unittest.main()
