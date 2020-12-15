# Project: Console Log-My-Food

A CLI application that puts your health first

## How to use this cli

- Start the JSON Server by running `npx json-server --watch db.json --port 3001` in the command line
- In a seperate terminal tab, run the index.js file
- As the cli is running, use `log` to log food items, or use `list vegan foods` to view the list of vegan food items in the database
- Use `exit` to exit the cli

## Modules Used

- [readline](https://nodejs.org/api/readline.html#readline_readline) - Node.js
- [JSON Server](https://github.com/typicode/json-server) - a full fake JSON API
- [axios](https://github.com/axios/axios) - to make RESTful requests to JSON Server