## Installation

Before installation you can make sure that node.js had installed on your computer.

1. Clone this project in your local storage.
2. Install all packages project need 
```
npm install
```
3. Install MySql if you don't had it.
4. Rename .env.example file to .env and edit this code for your needs:
```
MYSQL_USERNAME="your_username_mysql"
MYSQL_PASSWORD="your_password_mysql"
PORT="port_where_will_be_start_project"
```
5. Do migration and add seeds:
```
  node_modules/.bin/sequelize db:midrate
  node_modules/.bin/sequelize db:seed:all
```
## Getting Started

Start project with comand:
```
  npm start
```

### Running the example

For run example open in browser this url:

```
http://localhost:{PORT}/api/users?firstname=Megan
```
