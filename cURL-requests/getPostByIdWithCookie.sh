#!/bin/bash
source .conf
curl -i --cookie cookie.txt --cookie-jar cookie.txt "${GET_POST_BY_ID_URL}$1"
