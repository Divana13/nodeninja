1. Setup Appserv-win32
 - path: D:\AppServ
 - username: root
 - password: sokchea
 - check 'Enable InnoDB'

2. http://localhost/phpmyadmin
A: Create new user
 - username: bit
 - password: sokbitchea

. Grant all privileges on wildcard name (username\_%) 
. Global privileges 'Check All'

3. Stop service Apache2.2

4. Copy 'Appserv' folder into D:\ and replace all

5. Open php.ini in 'C:\windows' folder

6. Find word 'session.save_path' and copy whole line and past to other text.txt

7. Start service Apache2.2

8. http://localhost/restaurant_2c
   http://localhost/restaurant_2c_full/BMIS.html or http://localhost/restaurant_2c_full/login.php
   http://localhost/blueit_pos_v3_2digit/BMIS.html or http://localhost/blueit_pos_v3_2digit/login.php
 - username: admin
 - password: admin


Navicat software
	- Manage Users	-> Add user
	- Username: blueit
	- Hostname: localhost - info@blueitnet.com
	- password: BlueIT#168

Password: 8Jdi/14Yg7u0m+UxUrgoQ73l8vZREose6tkYjphOdkw=