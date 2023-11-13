# node js mongodb app containerized using docker

to enter docker mongodb database with admin privileges:
docker exec -t <the mongo container id> bash 
inside the shell:
mongosh -u <theusername> -p <thepassword> --authenticationDatabase admin

when using the connection string within a dockernetwork i can use the dns
the names of the containers are mapped to the ipaddresses

'mongodb://matteodatabase:mypassword@172.18.0.2:27017?authSource=admin'

can become: the docker conatiner name is: mongo-database  <<< the service name

'mongodb://matteodatabase:mypassword@mongo-database:27017?authSource=admin'

storing the environment variable mongo connection string

continue from : 2.25h

