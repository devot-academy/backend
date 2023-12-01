"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var users = [
    {
        id: 1,
        name: 'Álefe'
    },
    {
        id: 2,
        name: 'Allan'
    }
];
app.get('/', (req, res) => {
    res.status(401).json({ status: 200, users });
});
app.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ status: 200, users });
});
app.listen(3000, () => {
    console.log("Backend rodando!!");
});
