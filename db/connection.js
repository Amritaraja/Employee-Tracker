const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'pass',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db.')
);

connection.connect(function (error) {
    if (error) throw error;
})

module.exports = connection;