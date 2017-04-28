#!/usr/bin/env bash

npm install --production
npm prune --production

npm install mustache -g

mustache ../deploy/mongoCredentials.json sam.mustache.yaml > ../deploy/sam.yaml

zip -R ../deploy/deploy.zip '*'