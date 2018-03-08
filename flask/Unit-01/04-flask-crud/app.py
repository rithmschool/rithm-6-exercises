from flask import Flask, render_template, request, url_for
from snack import Snack

app = Flask(__name__)

snack_list = []

if __name__ == 'main':
    app.run(debug=True, port=3000)
