from flask import Flask, render_template, request
from flask_modus import Modus
from car import Car

snack_list = [Snack("Snickers", "Candy")]

app = Flask(__name__)


@app.route('/')
