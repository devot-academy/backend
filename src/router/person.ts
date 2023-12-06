import { buildServer, IReq, IRes } from '../lib/framework-server'
import { connection } from '../lib/query-builder'

const router = buildServer.Router();

router.get('/person', async (req: IReq, res: IRes) => {
    try {
        const persons = await connection.select('*').from('person');
        res.status(200).json({ persons });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: 'Internal server Error' });
    }
});

export const personRouter = router;
