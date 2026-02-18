CREATE DATABASE companydb;

\c companydb;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(100)
);

INSERT INTO employees (name, email, department)
VALUES
('Nandhu', 'nandhu@gmail.com', 'DevOps'),
('Arun', 'arun@gmail.com', 'Backend'),
('Priya', 'priya@gmail.com', 'Frontend');
