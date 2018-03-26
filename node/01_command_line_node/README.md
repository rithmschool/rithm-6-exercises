# Command Line Node

For this exercise, we are going to build a simple Node.js script which allows us to make a request to an API and store the data in a text file!

We will be using the following modules:

* [fs](https://nodejs.org/api/fs.html#fs_file_system) - for reading and writing to a file
* [process.argv](https://nodejs.org/api/process.html#process_process_argv) - for gathering arguments from the command line
* [axios](https://www.npmjs.com/package/axios) - for making API requests (this is an NPM package)

### Requirements

1.  This script should be invokable from the command line using `node ./dadjoke.js ['search term']`.
1.  The script should make an API request (via `axios`) to the [dad joke API](https://icanhazdadjoke.com/api) to search for a joke based on the search term.
1.  If jokes matching the term are found, print a random joke to the terminal and also save the joke to a file called `jokes.txt`.
1.  If no matching jokes were found, print a message to the user that no jokes were found for that search term.

**Example Usage:**

```sh
node ./dadjoke.js 'cactus'
```

### Bonus

1.  Implement the [prompt](https://github.com/flatiron/prompt) module to ask a user for some input instead of having to pass in an argument from the command line.
2.  Each time you call the script and new jokes are found, instead of overwriting the file `jokes.txt`, add to it.
