import { getFirestore } from './Firebase';

export const LoadProducts = async (id) => {

    const DB = getFirestore();
    const response = await DB.collection(`Productos`).doc(id).get();
    return response.data();
}
console.log(LoadProducts())