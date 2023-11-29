#!/bin/bash
username=$1
password=$2
curl -i -X POST \
  "${SIGNUP_URL}" \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"username\":\"$username\",\"password\":\"$password\" }"