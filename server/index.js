"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// middleware
app.use(cors_1.default());
app.use(express_1.default.json()); // get data from req.body
// routes
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("express server has started at port " + port);
});
console.log("Hello World from ts at " + port);
