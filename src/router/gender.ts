import { IReq, IRes, buildServer} from '../lib/framework-server'
import * as useCase from '../controller/createGender'

const router = buildServer.Router();

router.get('/', async (req: IReq, res: IRes) => {
    res.status(200).json({ message: 'hello world' });
});

router.post('/gender', async (req: IReq, res: IRes) => {
    try {
        const gender = req.body;
        await useCase.createGender(gender);
        res.status(201).json({ message: 'Genero cadastrado com sucesso!' });
    } catch (err) {
        console.log(err)
        res.status(403).json({ message: err.message });
    }
})

export const genderRouter = router;