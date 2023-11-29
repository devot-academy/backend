var express = require('express');
var app = express();

app.use(express.json());

var users = [
    {
        id: 1,
        name: 'Álefe'
    },
    {
        id: 2,
        name: 'Allan'
    },
    {
        id: 3,
        name: 'Raissa'
    }
]

app.get('/', (request, response) => {
    response.status(401).json({ status: 200, users });
});

app.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser)

    res.status(201).json({ status: 200, users })
})

app.listen(3000, () => {
    console.log("Backend rodando!!")
})