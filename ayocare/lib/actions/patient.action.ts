import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";

export const createUser = async ({email, phone, name} : any) => {
    try {
        const newUser = await users.create(ID.unique(), email, phone, undefined, name)
    } catch (error: any) {
        console.error(error);
        if (error && error.code === 409) {
            const docs = await users.list([
                Query.equal('email', [email])
            ])
            throw new error;
            console.log(error);
        }
    }
}