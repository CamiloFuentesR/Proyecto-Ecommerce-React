import { db } from '../firebase/Firebase';

export const LoadProductById = async (id) => {
    const response = await db.collection(`Productos`).doc(id).get();
    return response.data();
}

export const LoadProducts = async () => {
    const response = await db.collection('Productos').get();
    return response;
}