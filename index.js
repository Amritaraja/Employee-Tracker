const inquirer = require('inquirer')
const db = require('./db/connection')
require('console.table')

const utils = require('util')
db.query = utils.promisify(db.query)

async function app () {
   const answer = await inquirer.prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
              'View all departments',
              'View all roles',
              'View all employees',
              'Add a department',
              'Add a role',
              'Add an employee',
              'Update an employee role',
              'Quit',
            ],
          },
    ]) 
    if (answer.choice === 'View all departments') {
        viewDepartments()
    }
}
async function viewDepartments() {
const results = await db.query ('select * from department')
console.table (results) 
app() 
}

app() 
