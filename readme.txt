To Use this project, you need to clone it from gerrit. To clone it, follow the below steps-
 
 1. create a new directory.
    let's say "frontend". go inside the folder "frontend".
    go to this link : https://review2.bjitgroup.com:8443/admin/repos/p1371.4_digits_labo
 2. you will see two links. One is named with "Clone with commit-msg hook" and the other with "Clone". Copy the 2nd one.
 3. then open terminal in your "frontend" directory and paste the link in the terminal.you will see a new folder is created
    with the name "p1371.4digits_labo". go inside this folder and open new terminal there and write the following commands--
    
    3.1. git fetch origin
    3.2. git checkout origin/dev_frontend
    
    now you will see the codes for frontend. In the last opened terminal write the below commands--
    
    3.3. npm install
    	 (it will take some time to install necessary packages)
    3.4. npm start
    	 (now it will take you to your browser and you will find the project running and don't close the terminal)
    	 
Untill now you have ran the frontend part.

