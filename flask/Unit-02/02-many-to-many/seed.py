from project import db
from project.models import User, Message, Tag
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
u1 = User(
    username='Harry',
    first_name='Harry',
    last_name='Potter',
    img_url=
    'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=1200',
    password=hashed_utf8)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
u2 = User(
    username='Hermione',
    first_name='Hermione',
    last_name='Granger',
    img_url=
    'https://www.telegraph.co.uk/content/dam/books/2016/05/17/hermione-philosophers_trans_NvBQzQNjv4BqOO1DkfkdgLE_z8gnRL4QgSsRj-4FUki9sepwU2k53lM.jpg?imwidth=450',
    password=hashed_utf8)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
u3 = User(
    username='Albus',
    first_name='Albus',
    last_name='Dumbledore',
    img_url=
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHu2Bwtqenyyr-8PRbMlw_qP1DzO5sNSZuzxYKBLZ3S4u7nOQ',
    password=hashed_utf8)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
u4 = User(
    username='Whiskey',
    first_name='Whiskey',
    last_name='Lane',
    img_url='https://avatars0.githubusercontent.com/u/21209733?s=400&v=4',
    password=hashed_utf8)

db.session.add_all([u1, u2, u3, u4])
db.session.commit()

t1 = Tag(name="gryffindor")
t2 = Tag(name="hufflepuff")
t3 = Tag(name="ravenclaw")
t4 = Tag(name="slytherin")

db.session.add_all([t1, t2, t3, t4])
db.session.commit()

m1 = Message(
    content=
    'But in, you know, the Muggle world, people just stay put in photos.',
    user_id=1)
m2 = Message(
    content=
    'Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?',
    user_id=2)
m3 = Message(content='10000000 points to Gryffindor!', user_id=3)
m4 = Message(content='woof woof, guau guau, av av', user_id=4)

m1.tags.extend([t1, t2])
m2.tags.extend([t2, t3])
m3.tags.extend([t3, t4])
m3.tags.extend([t4, t1])

db.session.add_all([m1, m2, m3, m4])
db.session.commit()
