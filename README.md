Requierments:
1. PHP 8.1 \
   sudo add-apt-repository ppa:ondrej/php \
   sudo apt update \
   sudo apt install php8.1-fpm php8.1-common php8.1-mysql php8.1-xml php8.1-xmlrpc php8.1-curl php8.1-gd php8.1-imagick php8.1-cli php8.1-dev php8.1-imap    php8.1-mbstring php8.1-opcache php8.1-soap php8.1-zip php8.1-intl php8.1-bcmath
3. Composer
   curl -sS https://getcomposer.org/installer -o composer-setup.php \
   sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
5. Docker

Installation:
1. CLone this projects
2. Run composer install
3. Run ./vendor/bin/sail up -d
4. Run ./vendor/bin/sail artisan migrate --seed
5. Run ./vendor/bin/sail composer install" then "npm install"
6. Visit 0.0.0.0:88
 
Instructions:

1. Frontend is in folder resources/js
2. Main css file in resources/css
3. Main component is Pages/Main/Main.js
4. To watch changes on frontend run in terminal "./vendor/bin/sail npm run watch"


