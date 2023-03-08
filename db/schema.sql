DROP DATABASE if exists employee_db;

CREATE DATABASE employee_db; 
USE employee_db; 

CREATE TABLE department (
    id INT auto_increment primary key,
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
    id INT auto_increment primary key,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT auto_increment primary key,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
); 

