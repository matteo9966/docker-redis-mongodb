#!/bin/bash
title=$1
body=$2
curl -i -X POST \
  'http://localhost:3001/posts/' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw "{ \"title\":\"$title\",\"body\":\"$body\" }"