#!/bin/bash
username=$1
password=$2
curl -i -X POST \
  'http://localhost:3001/user/signup' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"username\":\"$username\",\"password\":\"$password\" }"