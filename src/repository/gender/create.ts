import { GenderModel } from '../../model'
import { connection } from '../../lib/query-builder'

export async function create(data: GenderModel) {
    await connection('gender').insert(data)
}