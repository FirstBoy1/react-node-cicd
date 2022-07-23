ufw allow "Nginx HTTP"
systemctl status nginx
adduser telmo
su - telmo
sudo usermod -aG sudo telmo
sudo chmod -R 777 /var/www/mywebsite
cd /var/www/mywebsite
sudo ./svc.sh install
sudo ./svc.sh start
cd /etc/nginx/sites-available
sudo nano default
sudo service nginx restart
sudo visudo -f /etc/sudoers.d/telmo

telmo ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start,/usr/sbin/service nginx stop,/usr/sbin/service nginx restart

proxy_pass http://localhost:3000;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;