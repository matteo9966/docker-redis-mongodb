#!/bin/bash
if [ "$1" = 'up' ];
 then

docker-compose -f docker-compose.yml  up -d --scale node-app=2 --build 

else

docker-compose -f docker-compose.yml down -t 20

fi