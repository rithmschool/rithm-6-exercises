from flask import Flask, render_template, redirect, url_for, request
from flask_modus import Modus
from snack import Snack

snack_list = [Snack('chocolate bar', 'chocolate'), Snack('chocolate chip cookie', 'cookie')]

app = Flask(__name__)
modus = Modus(app)

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/snacks', methods = ['GET', 'POST'])
def index():
    if request.method == 'POST':
        new_snack = Snack(request.form.get('name'), request.form.get('kind'))
        snack_list.append(new_snack)
        return redirect(url_for('index'))
    return render_template('index.html', snack_list = snack_list)

@app.route('/snacks/new')
def new():
    return render_template('new.html')

@app.route('/snacks/<int:id>')
def show(id):
    snack = get_snack_by_id(id)
    return render_template('show.html', snack = snack)

if __name__ == "__main__":
    app.run(debug = True, port = 3000)

def get_snack_by_id(id):
    selected_snack = [ el for el in snack_list if el.id == id ][0]
    return selected_snack