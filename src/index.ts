import { buildServer, IReq, IRes, middlewareEnableJSONInRequest } from './lib/framework-server'
import { connection } from './lib/query-builder'
import 'dotenv/config'


var app = buildServer();

app.use(middlewareEnableJSONInRequest());

const database = connection;

app.get('/person', async (req: IReq, res: IRes) => {
    try {
        const persons = await database.select('*').from('person');
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

app.get('/gender', async (req: IReq, res: IRes) => {
    try {
        const genders = await database.select('*').from('gender');
        res.status(200).json({ genders });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

app.post('/gender', async (req: IReq, res: IRes) => {
    try {
        const { description } = req.body;
        if (!description) throw new Error("Bad Request") 

        await database('gender').insert({ description });

        res.status(201).json({ status: 200 })
    } catch (err: { message: string }) {
        console.log(err)
        res.status(400).json({ status: 400, message: err?.message});
    }
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend rodando!!")
})