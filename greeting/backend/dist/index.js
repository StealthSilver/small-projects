"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//middleware to remove cors error
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
//middleware to parse the json
app.use(express_1.default.json());
app.get("/api/greet", (req, res) => {
    const hour = new Date().getHours();
    let greeting = "Hello";
    if (hour < 12) {
        greeting = "GOOD MORNING";
    }
    else if (hour >= 12 && hour < 18) {
        greeting = "GOOD AFTERNOON";
    }
    else {
        greeting = "GOOD EVENING";
    }
    res.json({ message: greeting });
});
app.listen(3000, () => {
    console.log("the app is listening on 3000");
});
