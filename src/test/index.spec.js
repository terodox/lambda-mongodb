"use strict";

const Mustache = require("mustache");
const fs = require("fs-promise");
const lambdaTester = require("lambda-tester");
let sut;

describe("index integration tests", function() {
    before(() => {
        return fs.readFile("deploy/mongoCredentials.json")
            .then(fileContent => {
                const mustacheView = JSON.parse(fileContent);
                process.env["mongoDbUrl"] = Mustache.render("mongodb://{{mongoDbUsername}}:{{mongoDbPassword}}@ds121171.mlab.com:21171/terodoxmongodb", mustacheView);

                sut = require("../index").handler;
            });
    });

    it("should callback with success", () => {
        return lambdaTester(sut)
            .event({})
            .expectResult();
    });
});