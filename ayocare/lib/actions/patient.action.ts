import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async () => {
    try {
        const newUser = await users.create(ID.unique(), 'ayonaim101@gmail.com');
        console.log(newUser);
    } catch (error: any) {
        console.error(error);
        // if (error && error.code === 409) {
        //     const docs = await users.list([
        //         Query.equal('email', [email])
        //     ])
        //     throw new error;
        //     console.log(error);
        // }
    }
}

export const getUsers = async (userId: string) => {
    try {
        const user = await users.get(userId);
    } catch (error) {
        console.log(error);
    }
}