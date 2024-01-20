import { GenderModel } from '../../model'
import { connection } from '../../lib/query-builder'

export async function getByDescription(description: GenderModel['description']): Promise<GenderModel | null> {
    if (!description) return null;

    const [gender] = await connection.select('*').from('gender').where('description', '=', description);

    if (!gender) return null;

    return gender;
}