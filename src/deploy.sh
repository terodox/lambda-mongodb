#!/usr/bin/env bash

cd ../deploy
aws cloudformation package --template-file ./sam.yaml --output-template-file ./cloudformation.yaml --s3-bucket builds.andrewdesmarais.com --s3-prefix deploy --profile personal
aws cloudformation deploy --template-file ./cloudformation.yaml --stack-name mongoDb --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM --profile personal