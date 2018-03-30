# MongoDB Fundamentals

Answer the following questions:

#### Conceptual

1.  What is NoSQL?
NoSQL is a type of database that unlike relational databases, do not use tables to structure data; rather, NoSQL databases are "schemaless" and use keys to retrieve values, column sets, etc from "documents" or "objects". 
1.  What does it mean that MongoDB is a document store?
You can store data under a key, exchanging a key for the value stored in the document. 
1.  What does it mean that MongoDB is schemaless?
It means that the schema is flexible, morphing as data is entered. It's often hierarchical and tree-oriented vs through very predictable rows and columns. 
1.  What are some examples of entities that fit a document model? (i.e. when would you prefer to model something with MongoDB vs. PostgreSQL).
MongoDB may be better for rapid development because of the schemaless architecture. If you are unsure of how your data will morph or change, it may be better to stay schemaless rather than write out a ton of migrations. Relational databases may be better for data thats involves a lot of relationships, where data must "interact" with other sets of data. If you have a ton of individual profiles for users and none of them are tied to one another, it may be better to go with MongoDB. 

#### Practical

1.  How do you connect to a database?
mongo dbname
1.  How do you create new databases?
mongo dbname (will create a db called dbname if it doesnt already exist)
1.  What is the command to list databases?
show dbs
1.  How do you create new collections?
db.createcollection() or if you just proceed as though the collection already exists, mongodb will create one similarly to the database about. 
1.  How do you list collections?
show collections
or 
db.getCollectionNames()
1.  What are four query operators that map to CRUD?
db.users.insert() - create
db.users.find() - read
db.users.update() - update 
db.users.remove() - delete


#### Bonus

1.  What is the data format of MongoDB documents?
BSON
1.  What is the command to export a collection into a JSON file?
