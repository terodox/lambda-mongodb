"use strict";

const MongoClient = require("mongodb").MongoClient;

const mongoPromise = MongoClient.connect(process.env.mongoDbUrl);

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event));
    mongoPromise
        .then(db => {
            console.log(db);
            callback(null, {});
        })
        .catch(err => {
            console.error(err);
            callback(`INTERNAL_ERROR: a catastrophic error occurred. RequestId: ${context.awsRequestId}`);
        });
};