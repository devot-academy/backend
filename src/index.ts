import express, { Request, Response } from 'express';
import { knex } from 'knex'
import 'dotenv/config';

var app = express();

app.use(express.json());

const { 
    DATADASE_HOST,
    DATADASE_PORT,
    DATADASE_USER,
    DATADASE_PASSWORD,
    DATADASE_NAME 
} = process.env;

const pg = knex({
    client: 'pg',
    connection: {
        host : DATADASE_HOST,
        port : Number(DATADASE_PORT),
        user :  DATADASE_USER,
        password : DATADASE_PASSWORD,
        database : DATADASE_NAME
    }
})

app.get('/person', async (req: Request, res: Response) => {
    try {
        const persons = await pg.select('*').from('person');
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

app.get('/gender', async (req: Request, res: Response) => {
    try {
        const genders = await pg.select('*').from('gender');
        res.status(200).json({ genders });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

app.post('/gender', async (req: Request, res: Response) => {
    try {
        const { description } = req.body;
        if (!description) throw new Error("Bad Request") 

        await pg('gender').insert({ description });

        res.status(201).json({ status: 200 })
    } catch (err: { message: string }) {
        console.log(err)
        res.status(400).json({ status: 400, message: err?.message});
    }
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend rodando!!")
})