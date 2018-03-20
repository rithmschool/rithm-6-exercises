# Many To Many Sample Database

The SQL files in this directory feature an example of a many-to-many association. But before digging into many-to-manys, let's review some of the SQL queries we've seen before.

### Part 1

In the terminal, let's run a couple of files to put the `movies` data into a database:

```sh
psql < setup.sql
psql < movies.sql
psql movies_db
```

As a warmup, write the queries that will show you the following information:

1.  The title of every movie.

  * select title 
    from movies;

2.  All information on the G-rated movies.

  * select * 
    from movies 
    where rating = 'G';

3.  The title and release year of every movie, ordered with the oldest movie first.

  * select title, release_year 
    from movies 
    order by release_year asc;

4.  All information on the 5 longest movies.

  * select * 
    from movies 
    order by runtime desc 
    limit 5;

5.  A table with columns of `rating` and `total`, tabulating the total number of G, PG, PG-13, and R-rated movies.

  * select rating, count(rating) as total 
    from movies 
    group by rating;

6.  A table with columns of `release_year` and `average_runtime`, tabulating the average runtime by year for every movie in the database. The data should be in reverse chronological order (i.e. the most recent year should be first).

  * select release_year, round(avg(runtime)) as average_runtime 
  from movies 
  group by release_year 
  order by release_year desc;

### Part 2

In the terminal, let's now add the `stars` data:

```sh
psql < stars.sql
```

As another warmup, write the queries that will show you the following information:

1.  The first and last name of the five oldest stars.

  * select first_name, last_name 
    from stars 
    order by birth_date asc 
    limit 5;

2.  The first and last name of the five youngest stars.

  * select first_name, last_name 
    from stars 
    order by birth_date desc 
    limit 5;

3.  A table of first names along with the number of stars having that first name, provided that this number is greater than 1.

  * select first_name, count(first_name) as total 
    from stars 
    group by first_name 
    having count(first_name) > 1; 

4.  A table of years along with the number of stars born in that year, sorted chronologically.

  * select extract(year 
    from birth_date) as year, count(extract(year 
    from birth_date)) as total 
    from stars 
    group by year 
    order by year asc;

### Part 3

Now let's explore some basic joins with a 1 to many association!

```
psql < studios.sql
```

Write the queries that will show you the following information:

1.  The movie title and studio name for every movie in the database.

  * select title, name 
    from movies 
    join studios 
    on studios.id = movies.studio_id;

2.  The names of all studios that have no movie in the database (try to do this with two different queries!)

  * select name 
    from studios left 
    join movies 
    on studios.id = movies.studio_id 
    where movies.title is null;

### Part 4

Once you've learned about many-to-many associations, let's add the `roles` join table:

```sh
psql < roles.sql
```

As an exercise, write the queries that will show you the following information:

1.  The star first name, star last name, and movie title for every matching movie and star pair in the database.
<<<<<<< HEAD

  * select first_name, last_name, movies.title 
    from stars 
    join roles 
    on stars.id = star_id 
    join movies 
    on movies.id = movie_id;

2.  The first and last names of every star who has been in a G-rated movie.

  * select first_name, last_name                                                                                               
    from stars
    join roles
    on stars.id = star_id
    join movies
    on movies.id = movie_id
    where rating = 'G';

3.  The first and last names of every star along with the number of movies they have been in, in descending order by the number of movies.

  * select first_name, last_name, count(movie_id)
    from stars
    join roles
    on stars.id = star_id
    join movies
    on movies.id = movie_id
    group by first_name, last_name
    order by count(movie_id) desc;

  * select first_name, last_name, count(star_id)
    from stars
    join roles
    on stars.id = star_id
    group by first_name, last_name
    order by count(movie_id) desc;

4.  The title of every movie along with the number of stars in that movie, in descending order by the number of stars.

  * select title, count(star_id) from movies
    join roles
    on movies.id = movie_id
    join stars
    on stars.id = star_id
    group by title
    order by count(star_id) desc;

5.  The first and last names of the five stars whose movies have the longest average.

  * select first_name, last_name 
    from stars 
    join roles on stars.id = star_id 
    join movies 
    on movies.id = movie_id 
    group by first_name, last_name 
    order by round(avg(runtime)) desc 
    limit 5;

6.  The first and last names of the five stars whose movies have the longest average, among stars who have more than one movie in the database.

  * select first_name, last_name 
    from stars 
    join roles 
    on stars.id = star_id 
    join movies 
    on movies.id = movie_id 
    group by first_name, last_name 
    having(count(star_id)) > 1 
    limit 5;
=======
1.  The first and last names of every star who has been in a G-rated movie.
1.  The first and last names of every star along with the number of movies they have been in, in descending order by the number of movies.
1.  The title of every movie along with the number of stars in that movie, in descending order by the number of stars.
1.  The first name, last name, and average runtime of the five stars whose movies have the longest average.
1.  The first name, last name, and average runtime of the five stars whose movies have the longest average, among stars who have more than one movie in the database.
>>>>>>> 7753397feddd31d3229a6dc4f6e98b2a24145d94

### Part 5

Try writing the following queries using a join that isn't an inner join:

1.  The titles of all movies that don't feature any stars in our database.

  * select title 
    from movies 
    left join roles 
    on movies.id = movie_id 
    left join stars 
    on stars.id = star_id 
    where star_id is null;

2.  The first and last names of all stars that don't appear in any movies in our database.

  * select first_name, last_name 
    from stars 
    left join roles 
    on stars.id = star_id 
    left join movies 
    on movies.id = movie_id
    where movie_id is null;

3.  The first names, last names, and titles corresponding to every role in the database, along with every movie title that doesn't have a star, and the first and last names of every star not in a movie.

  * select first_name, last_name, title 
    from stars 
    full join roles 
    on stars.id = star_id 
    full join movies 
    on movies.id = movie_id;
