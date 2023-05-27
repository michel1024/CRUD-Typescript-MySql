CREATE DATABASE ts_mysql;
USE ts_mysql;

CREATE TABLE posts (
  id int(11) NOT NULL,
  title varchar(200) NOT NULL,
  description text NOT NULL,
  image_url text DEFAULT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE posts;


CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(200) NOT NULL,
  user varchar(100) NOT NULL,
  email varchar(500) NOT NULL,
  password varchar(500) NOT NULL,
  role varchar(150) NOT NULL
)