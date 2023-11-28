#!/bin/bash
username=$1
password=$2
##this is a way to store data and reuse cookies
curl --cookie cookie.txt --cookie-jar cookie.txt -X POST \
  'http://localhost:3001/user/login' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"username\":\"$username\",\"password\":\"$password\" }"