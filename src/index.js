"use strict";

const MongoClient = require("mongodb").MongoClient;

exports.handler = function (event, context, callback) {
    console.log(JSON.stringify(event));

    let mongoDb;
    MongoClient.connect(process.env.mongoDbUrl)
        .then(db => {
            mongoDb = db;
            console.log("Connected to Mongo DB");
            return dispatchHttpCall(mongoDb, event.httpMethod);
        })
        .then(() => {
            mongoDb.close();
            callback(null, "success");
        })
        .catch(err => {
            console.error(err);
            callback(`INTERNAL_ERROR: a catastrophic error occurred. RequestId: ${context.awsRequestId}`);
        });
};

function dispatchHttpCall(mongoDb, httpMethod) {
    switch (httpMethod) {
        case 'DELETE':
            return Promise.resolve();
        case 'GET':
            return Promise.resolve();
        case 'POST':
            return Promise.resolve();
        default:
            return Promise.reject(`Unsupported method "${httpMethod}"`);
    }
}