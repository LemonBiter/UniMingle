DROP user 'unimingle'@'localhost';
CREATE USER 'unimingle'@'localhost' IDENTIFIED BY 'RTFG4fdfcvfra7Qq';
DROP DATABASE IF EXISTS unimingle;
CREATE DATABASE IF NOT EXISTS unimingle CHARACTER SET utf8;
GRANT ALL PRIVILEGES ON unimingle.* TO 'unimingle'@'localhost';
FLUSH PRIVILEGES;
