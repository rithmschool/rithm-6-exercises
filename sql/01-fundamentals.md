# SQL Fundamentals

Answer the following questions:

#### Conceptual

1. What is an `RDBMS`? A database management system based on a relational mode.
1. What is the difference between `RDBMS` and `SQL`?  RDBMS is the a model that the SQL language is based on.
1. What is a relational database? A database that is structured so that relationships can be established among stored information.
1. What is a schema? The organization of data inside of a database. 

#### Practical

1. How do you connect to a database in `psql`? \c NAME_OF_DB
1. How do you create a database in `psql`? CREATE DATABASE name_of_db;
1. How do you create a database in the terminal? createdb name_of_db
1. How do you drop a database in `psql`? DROP DATABASE name_of_db;
1. How do you drop a database in the terminal? dropdb name_of_db
1. How do you show all of your databases in `psql`? \l
1. How do you show all of your tables for the current database in `psql`? \dt

#### Bonus

1. What is ACID? ACID (Atomicity, Consistency, Isolation, Durability)
    A set of properties of database transactions intended to guarantee validity
    even in the event of errors, power failures,etc.
1. What is the CAP Theorem? A theory that states that it is impossible for a distributed data 
    store to simultaneously provide more than two out of the three following guarantees:
        1)cosistency
        2)Availability
        3)Paritition tolerance
