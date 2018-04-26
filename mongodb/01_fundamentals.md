# MongoDB Fundamentals

Answer the following questions:

#### Conceptual

1.  What is NoSQL?

NoSQL is a term used to describe non-relational databases that typically do not use a sql based language.

1.  What does it mean that MongoDB is a document store?

Document store DB's store each record and it's associated data within a single field. Each doc is semi-structured but can still be queried against.

1.  What does it mean that MongoDB is schemaless?

This means that MongoDB does not have a fixed data structure that is pre-laid out. With Mongo, you can change the data strucuture as you please.

1.  What are some examples of entities that fit a document model? (i.e. when would you prefer to model something with MongoDB vs. PostgreSQL).

It would be good to use something like PSQL is you have relational entities. A good example would be twitter. Each user has many tweets, followers and likes. Each user's tweets has many likes and those can be by followers or non followers. The relational data is strictly laid out.

It would be good to use something like MongoDB if you are a new company that is experiencing rapid growth. If you plan to store a info for each customer, and each customer might have different information that needs to be stored, Mongo is perfect. You can add new fields as you need, but still create an invoice for each customer.

#### Practical

1.  How do you connect to a database?

<!-- A database must be hosted on a server to connect to it.  This server can either be local and only accessed by one machine, or the server can be hosted on a machine that can be accessed by many users.  You connect to a database by sending commands to it either sending or receiving data back and forth.  Applications and websites send and receive data as needed. -->

In MongoDB in order to connect to a database you simply type mongo <dbname>. This will open a shell in which you can interact with the database. Be careful of typos!

1.  How do you create new databases?

In MongoDB in order to create a database you simply type mongo <dbname>. This is identical to connecting to a database, so it will have the same result of opening a shell that you can use to interact with the database. Be careful of typos!

<!-- Each language has a different way of creating databases, but simply put a command is sent to the machine requesting a new database be created.  The data can either be stictly laid out in a SQL based language, or a NoSQL based language can be used.  The databased must be hosted somewhere (local or not) in order to be connected to. -->

1.  What is the command to list databases?

Open up mongo shell and type `show dbs`

1.  How do you create new collections?

`db.createCollection(<connectionname>);`

1.  How do you list collections?

Connect to shell and enter `show collections`

1.  What are four query operators that map to CRUD?

C:
`db.collection.insertOne()`
R:
`db.collection.find()`
U:
`db.collection.updateOne()`
D:
`db.collection.deleteOne()`

#### Bonus

1.  What is the data format of MongoDB documents?
1.  What is the command to export a collection into a JSON file?
