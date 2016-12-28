-- create database for the music player 
CREATE DATABASE IF NOT EXISTS music_player;
USE music_player;

-- create users table
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password CHAR(32) NOT NULL
);

-- create music table
DROP TABLE IF EXISTS music;
CREATE TABLE IF NOT EXISTS music (
    user_id INT(10) NOT NULL,
    playlist_id INT(10) NOT NULL,
    video_id VARCHAR(20) NOT NULL
);

-- create playlist table
-- DROP TABLE IF EXISTS playlist;
-- CREATE TABLE IF NOT EXISTS playlist (
--     playlist_id INT(10) NOT NULL,
--     user_id INT(10) NOT NULL
-- );

-- populate database tables with some fake database
-- create test account
INSERT INTO users VALUES (1, 'acc', MD5('sdfasdasdfa@f165648a'));

-- insert test videoIds for music
INSERT INTO music VALUES
(1, 1, 'pcKR0LPwoYs'),
(1, 1, '--zku6TB5NY'),
(1, 1, 'RwFi7wnH5W0'),
(1, 1, 'dImPgtJq1_A'),
(1, 1, 'iIPH8LFYFRk'),
(1, 1, 'y3CSu20OSHI'),
(1, 1, 'GE_4RtpVVaw'),
(1, 1, 'acKYkaOYiWQ'),
(1, 1, 'yXAJIdyyZK4'),
(1, 1, '4s-xd9O5ZQg'),
(1, 1, 'UbHVxe6D-Nw');