#!/bin/bash
username=$1
password=$2
##this is a way to store data and reuse cookies
source .conf
curl --cookie cookie.txt --cookie-jar cookie.txt -X POST \
  "${LOGIN_URL}" \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"username\":\"$username\",\"password\":\"$password\" }"