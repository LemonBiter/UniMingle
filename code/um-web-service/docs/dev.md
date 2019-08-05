# database
```shell
# db prepare
DROP user 'unimingle'@'localhost';
CREATE USER 'unimingle'@'localhost' IDENTIFIED BY 'RTFG4fdfcvfra7Qq';
DROP DATABASE IF EXISTS unimingle;
CREATE DATABASE IF NOT EXISTS unimingle CHARACTER SET utf8;
GRANT ALL PRIVILEGES ON unimingle.* TO 'unimingle'@'localhost';
FLUSH PRIVILEGES;
```

# valet config
```shell
cd ~/Workspace/UniMingle/code
valet park

# test
http://um-web-service.test

```

# modules dev
```shell

# database queue driver
## .env 
QUEUE_CONNECTION=database

php artisan queue:table
php artisan queue:failed-table
php artisan migrate

# role/permissions
## https://github.com/spatie/laravel-permission
composer require spatie/laravel-permission
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"
php artisan migrate
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="config"

# resources table (images/files storage)
php artisan make:model "Models\Resource" -a

php artisan make:model "Models\Category" -a
php artisan make:model "Models\Tag" -a

# countries && cities
php artisan make:model "Models\Country " -a
php artisan make:model "Models\City " -a

# university
php artisan make:model "Models\University " -a

# year level
php artisan make:model "Models\YearLevel " -a

# event
php artisan make:model "Models\Event " -a

# statistics
php artisan make:model "Models\Stat " -m
```

# database
```shell
# reset
composer dump-autoload
# drop All Tables & Migrate & seed
php artisan migrate:fresh --seed

# empty resources
rm -rf storage/app/files

# use the --class option to specify a specific seeder class to run individually 
php artisan migrate --path=/database/migrations/2019_01_16_092609_create_cities_table.php
php artisan db:seed --class=UserTableSeeder


```

# unit test
```shell
cd um-web-service
vendor/bin/phpunit --testdox-html ut_report.html
```