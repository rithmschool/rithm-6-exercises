from flask import Flask, request, redirect, url_for,render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://localhost/sunsets-db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True

db = SQLAlchemy(app)
migrate = Migrate(app,db)

class Sunset(db.Model):
    __tablename__ = "sunsets"

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    caption = db.Column(db.Text)
    location = db.Column(db.Text)
    beauty = db.Column(db.Integer)
    #prettiness = db.Column(db.Text)

@app.route('/')
def root ():
    return redirect(url_for('index'))

@app.route('/sunsets', methods=['GET','POST'])
def index():
    if request.method == "POST":
        img_url = request.form.get('img_url')
        caption = request.form.get('caption')
        location = request.form.get('location')
        beauty = request.form.get('beauty')
        #prettiness = request.form.get('prettiness')

        new_sunset = Sunset(img_url=img_url, caption=caption, location=location, beauty=beauty)
        db.session.add(new_sunset)
        db.session.commit()
        return redirect(url_for('index'))
    return render_template('index.html', sunset_list=Sunset.query.all())

if __name__ == '__main__':
    app.run(debug=True, port=3000)
