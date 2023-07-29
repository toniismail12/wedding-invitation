# Use the official PHP image as the base image
FROM php:8.0-fpm

# Set working directory in the container
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the Laravel application files to the container
COPY . .

# Install Laravel dependencies
RUN composer install

# Generate the application key
RUN php artisan key:generate

# Expose the port on which PHP-FPM will be listening
EXPOSE 5001

# Start PHP-FPM
CMD ["php-fpm"]
