CREATE DATABASE skincaredb;

CREATE TABLE users (
    username VARCHAR(100) PRIMARY KEY UNIQUE,
    email VARCHAR(100),
    pass VARCHAR(100)
);

CREATE TABLE posts (
    title VARCHAR(100) PRIMARY KEY,
    body VARCHAR(1000),
    prodType VARCHAR(100),
    datePosted VARCHAR(100),
    postId VARCHAR(100) UNIQUE
)

CREATE TABLE comments (
    postId VARCHAR(100),
    comment VARCHAR(1000)
)