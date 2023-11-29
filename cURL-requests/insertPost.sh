#!/bin/bash
title=$1
body=$2
source .conf
curl -i -X POST \
  "${INSERT_POST_URL}" \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"title\":\"$title\",\"body\":\"$body\" }"