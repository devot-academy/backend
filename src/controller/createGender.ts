import { GenderModel } from '../model'
import { getByDescription, create } from '../repository/gender';

export async function createGender(data: GenderModel) {
    const { id, description } = data;

    if(!id || !description) throw new Error("Dados invalidos");

    const genderExists = await getByDescription(description);

    if(genderExists) throw new Error("Genero já cadastrado");

    await create(data);

}