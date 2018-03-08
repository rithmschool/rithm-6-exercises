from flask import Flask, render_template, redirect, url_for, request
from modus import Modus
from snack import Snack

app = Flask(__name__)

snack_list = [ Snack('chocolate bar', 'chocolate'), Snack('chocolate chip cookie', 'cookie') ]
modus = Modus(app)
