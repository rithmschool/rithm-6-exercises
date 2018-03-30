from project import db
from project.models import User, Message, Tag
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
user1 = User(
    first_name='FattyPie',
    last_name='The Cat',
    username='catIsPhat',
    password=hashed_utf8,
    image_url=
    'https://media.gannett-cdn.com/29906170001/29906170001_5609603192001_5609577153001-vs.jpg?pubId=29906170001&quality=10'
)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
user2 = User(
    first_name='Spike',
    last_name='Vampire',
    username='SlayerLover',
    password=hashed_utf8,
    image_url=
    'https://hellogiggles.com/wp-content/uploads/2016/01/19/Spike-from-Buffy-the-Vampire-Slayer.jpg'
)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
user3 = User(
    first_name='Buffy',
    last_name='Summers',
    username='InEveryGeneration',
    password=hashed_utf8,
    image_url=
    'https://bloggybalboa.files.wordpress.com/2015/09/buffy_summers_go_fish.jpg'
)

hashed = bcrypt.generate_password_hash('password')
hashed_utf8 = hashed.decode("utf8")
user4 = User(
    first_name='Rupert',
    last_name='Giles',
    username='watchersRule',
    password=hashed_utf8,
    image_url=
    'https://vignette.wikia.nocookie.net/buffy/images/d/d3/Gilesdraw.jpg/revision/latest?cb=20120312054255'
)

db.session.add_all([user1, user2, user3, user4])
db.session.commit()

message1 = Message(content='You are so fat, lol', user_id=1)
message2 = Message(content='I love Buffy Summers so much', user_id=2)
message3 = Message(
    content='The hardest thing in this world is to live in it. Be brave. Live.',
    user_id=3)
message4 = Message(content='The Earth is doomed.', user_id=4)

db.session.add_all([message1, message2, message3, message4])
db.session.commit()

tag1 = Tag(tag_name='awesome')
tag2 = Tag(tag_name='depressing')
tag3 = Tag(tag_name='lifeshard')
tag4 = Tag(tag_name='Imafatcat')

tag1.messages.extend([message2])
tag2.messages.extend([message3])
tag4.messages.extend([message1])
tag3.messages.extend([message4])

db.session.add_all([tag1, tag2, tag3, tag4])
db.session.commit()
