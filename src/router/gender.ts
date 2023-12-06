import { IReq, IRes, buildServer} from '../lib/framework-server'
import { connection } from '../lib/query-builder';

const router = buildServer.Router();

router.get('/gender', async (req: IReq, res: IRes) => {
    try {
        const genders = await connection.select('*').from('gender');
        res.status(200).json({ genders });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

router.post('/gender', async (req: IReq, res: IRes) => {
    try {
        const { description } = req.body;
        if (!description) throw new Error("Bad Request") 

        await connection('gender').insert({ description });

        res.status(201).json({ status: 200 })
    } catch (err: { message: string }) {
        console.log(err)
        res.status(400).json({ status: 400, message: err?.message});
    }
})

export const genderRouter = router;