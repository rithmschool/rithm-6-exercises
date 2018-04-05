# MongoDB Fundamentals

Answer the following questions:

#### Conceptual

1.  What is NoSQL?
    NoSQL databases are non-relational and generally do not store data in table form.

1.  What does it mean that MongoDB is a document store?
    MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time

1.  What does it mean that MongoDB is schemaless?
    MongoDB is built to allow the insertion of data without a predefined schema.

1.  What are some examples of entities that fit a document model? (i.e. when would you prefer to model something with MongoDB vs. PostgreSQL).
    When data is inconsistent. When no limits on the types of data that needs to be stored. When database needs to be scaled across multiple data centers.

#### Practical

1.  How do you connect to a database?
    mongo

1.  How do you create new databases?
    use newDB

1.  What is the command to list databases?
    show dbs

1.  How do you create new collections?
    db.createCollection(collectionName)

1.  How do you list collections?
    db.getCollectionNames()

1.  What are four query operators that map to CRUD?
    db.collectionName.insert(), db.collectionName.insertMany()
    db.collectionName.find(), db.collectionName.findOne()
    db.collectionName.update()
    db.collectionName.remove();

    db.users.findAndModify()
    db.users.findOneAndUpdate()
    db.users.findOneAndDelete()

#### Bonus

1.  What is the data format of MongoDB documents?
    JavaScript Object Notation (JSON). MongoDB represents JSON documents in binary-encoded format called BSON behind the scenes.

1.  What is the command to export a collection into a JSON file?
    mongoexport
