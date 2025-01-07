server {
    listen 80;
    server_name dhansathi.com www.dhansathi.com;

    root /var/www/dhansathi.com;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock; # Adjust to your PHP version
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }
} 





























































server {
    listen 80;
    server_name dhansathi.com www.dhansathi.com;

    root /home/dhansathi.com/public_html;
    index index.php index.html index.htm;

    # Allow WordPress to handle permalinks
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    # Pass PHP scripts to FastCGI server
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    # Deny access to sensitive files
    location ~ /\.ht {
        deny all;
    }
}