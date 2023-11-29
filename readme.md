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


# wiring up redis

in order to use redis:
add a redis image to the docker-compose.yml file
use express-session library
use connect-redis library

# scaling up the application: 
 - using the docker-compose, use --scale node-app=2 to have two instances of node-app


# docker logs

- to have a docker log follow the updates use the docker logs <docker-container-name> -f  

continue from : 3.34h 


