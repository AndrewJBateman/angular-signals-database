const serverless = require('serverless-http');
const { app } = require("./dist/angular-signals-database/server/main");

exports.handler = serverless(app());
