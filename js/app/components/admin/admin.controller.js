"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin_repository_1 = __importDefault(require("./admin.repository"));
function getAdmin(username, password) {
    var admins = admin_repository_1.default.getAdmin(username, password);
    if (admins != undefined) {
        return admins;
    }
    else
        return null;
}
;
exports.default = { getAdmin: getAdmin };
