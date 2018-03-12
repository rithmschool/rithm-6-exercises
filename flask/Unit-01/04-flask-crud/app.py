from flask import Flask, render_template, redirect, request, url_for
from flask_modus import Modus
from snack import Snack
from IPython import embed

app = Flask (__name__)
app.url_map.strict_slashes = False
modus = Modus(app)

#snack_list = [Snack('Mango','Fruit'), Snack('Almonds','Nuts')]
snack_list = []

def get_snack(id):
    return next(snack for snack in snack_list if snack.id == id)


@app.route('/')
def root():
    return redirect(url_for('index'))


@app.route('/snacks', methods=['GET','POST'])
def index():
    if request.method == "POST":
        #request.form['imgurl'])
        snack_list.append(Snack(request.form['name'],request.form['kind']))
        return redirect(url_for('index'))
    return render_template("index.html", snacks=snack_list)


@app.route('/snacks/new')
def new():
    return render_template("new.html")


@app.route('/snacks/<int:id>', methods=["GET", "PATCH", "DELETE"])
def show(id):

    try:
        snack = get_snack(id)
    except:
        return render_template("404.html")

    if request.method == b"PATCH":
        snack.name = request.form['name']
        snack.kind = request.form['kind']
        #snack.imgurl = request.form['imgurl']
        return redirect(url_for('show', id = snack.id))

    elif request.method == b"DELETE":
        snack_list.remove(snack)
        return redirect(url_for('index'))

    else:
        return render_template('show.html', snack=snack)


@app.route("/snacks/<int:id>/edit")
def edit(id):
    snack = get_snack(id)
    return render_template('edit.html', snack=snack)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, port=3000)
