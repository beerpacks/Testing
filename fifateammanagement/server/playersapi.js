"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersApi = void 0;
const express_1 = __importDefault(require("express"));
exports.playersApi = express_1.default.Router();
exports.playersApi.post("/players", (req, res) => {
    let response = {
        allPlayers: [
            {
                name: "JF"
            }, {
                name: "Simon-Pierre"
            }
        ],
        success: true
    };
    res.end(JSON.stringify(response));
});
//# sourceMappingURL=playersapi.js.map