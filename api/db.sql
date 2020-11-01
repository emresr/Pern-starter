CREATE DATABASE todo;

CREATE TABLE todos(
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  tag VARCHAR(255),
  done BOOLEAN  DEFAULT '0', 
  date VARCHAR(255),
  priority VARCHAR(1)
);


INSERT INTO todos (description) VALUES ('todo');