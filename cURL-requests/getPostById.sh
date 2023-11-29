#!/bin/bash
source .conf
curl -i"${GET_POST_BY_ID_URL}$1"
