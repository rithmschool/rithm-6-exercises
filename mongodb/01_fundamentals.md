# MongoDB Fundamentals

Answer the following questions:

#### Conceptual

1.  What is NoSQL?

A metanym for a non-relational aka object aka entity database

1.  What does it mean that MongoDB is a document store?

Mongo organizes data into collections of 'documents' or 'objects', analogous to rows/records in tables for relational databases

1.  What does it mean that MongoDB is schemaless?

The coder need not specify a document structure in advance, and the data in the document need not conform to the same schema/structure.

1.  What are some examples of entities that fit a document model? (i.e. when would you 
prefer to model something with MongoDB vs. PostgreSQL).

Data that suggests a tree-structure would lend itself to a document model.  
Examples: 
(1) The organizational chart for a hierarchical organization, such as a corporation, NGO, or government body where there are clearly defined reporting structures.
(2) A resource that has a lot of properties, but need not reference another resource.  Perhaps nutritional db where one can look up the number of calories, grams of fat, etc in Ben & Jerry's Ice Creams. 

#### Practical

1.  How do you connect to a database?

mongo db_name

1.  How do you create new databases?

Don't have to.  Just connect and it will be created if it doesn't exist.
mongo db_name

1.  What is the command to list databases?

show dbs

1.  How do you create new collections?

Add a document to it.  If it doesn't exist, it will be created.
db.collection.insert(document)

1.  How do you list collections?

db.getCollectionNames()

1.  What are four query operators that map to CRUD?

C - db.collection.insert()

R - db.collection.find()

U - db.collection.update()

D - db.collection.remove()

#### Bonus

1.  What is the data format of MongoDB documents? 

BSON

1.  What is the command to export a collection into a JSON file?

?
