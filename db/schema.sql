### Schema
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name, devoured) VALUES ('Baconator', false);
INSERT INTO burgers (name, devoured) VALUES ('Veggie Burger', false);
INSERT INTO burgers (name, devoured) VALUES ('Angus Burger', false);
INSERT INTO burgers (name, devoured) VALUES ('Black Bean', true);