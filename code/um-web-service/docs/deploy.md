## create DB 
- create .env file in the app root dir  
  - set APP_DEBUG=false
- create database 
```shell
# db prepare
DROP user 'unimingle'@'localhost';
CREATE USER 'unimingle'@'localhost' IDENTIFIED BY 'RTFG4fdfcvfra(7Qq';
DROP DATABASE IF EXISTS unimingle;
CREATE DATABASE IF NOT EXISTS unimingle CHARACTER SET utf8;
GRANT ALL PRIVILEGES ON unimingle.* TO 'unimingle'@'localhost';
FLUSH PRIVILEGES;
```

## init data
```shell
cd /var/www/mci/code/um-web-service
composer install --optimize-autoloader --no-dev
composer dump-autoload
php artisan migrate:fresh --seed

php artisan key:generate

# check stroage link
cd /var/www/mci/code/um-web-service/public
unlink storage
cd ../
php artisan storage:link

# change permissons after composer update
chown -R nginx:nginx /var/www/mci
```