from project import db
from project.models import User, Message

u1 = User(
    first_name='Harry',
    last_name='Potter',
    img_url=
    'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=1200'
)
u2 = User(
    first_name='Hermione',
    last_name='Granger',
    img_url=
    'https://www.telegraph.co.uk/content/dam/books/2016/05/17/hermione-philosophers_trans_NvBQzQNjv4BqOO1DkfkdgLE_z8gnRL4QgSsRj-4FUki9sepwU2k53lM.jpg?imwidth=450'
)
u3 = User(
    first_name='Albus',
    last_name='Dumbledore',
    img_url=
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHu2Bwtqenyyr-8PRbMlw_qP1DzO5sNSZuzxYKBLZ3S4u7nOQ'
)
u4 = User(
    first_name='Whiskey',
    last_name='Lane',
    img_url='https://avatars0.githubusercontent.com/u/21209733?s=400&v=4')

db.session.add_all([u1, u2, u3, u4])
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

db.session.add_all([m1, m2, m3, m4])
db.session.commit()
