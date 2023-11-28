#!/bin/bash
if [ "$1" = 'up' ];
 then

docker-compose -f docker-compose.yml  up -d --build

else

docker-compose -f docker-compose.yml down --remove-orphans

fi