#!/bin/bash
if [ "$1" = 'up' ];
 then

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

else

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down 

fi