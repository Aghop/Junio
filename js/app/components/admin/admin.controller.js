"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin_repository_1 = __importDefault(require("./admin.repository"));
function getAdmins() {
    var admins = admin_repository_1.default.getAdmins();
    if (admins != undefined) {
        return admins;
    }
    else
        return null;
}
;
exports.default = { getAdmins: getAdmins };
