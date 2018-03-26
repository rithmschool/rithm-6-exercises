from app import db, User, Message

u1 = User(first_name='Paula', last_name='Goyanes')
u2 = User(first_name='Zoran', last_name='Savic')
u3 = User(first_name='Whiskey', last_name='Lane')

db.session.add_all([u1, u2, u3])
db.session.commit()

m1 = Message(content='Howdy there, cowboy', user_id=1)
m2 = Message(content='this is hard ', user_id=2)
m3 = Message(content='woof woof, guau guau, av av', user_id=3)

db.session.add_all([m1, m2, m3])
db.session.commit()