"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const addTwo_1 = require("./utils/addTwo");
const cli = () => {
    console.log((0, addTwo_1.addTwo)(2));
};
exports.cli = cli;
