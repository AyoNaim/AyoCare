import { Account, Client, ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { redirect } from "next/navigation";


const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject('66a82f3d0001bbe2c367');


export const createUser = () => {
    try {
        const account = new Account(client);
        const newUser = account.createEmailToken(
            ID.unique(), 'ayonaim101@gmail.com', true
        );
        newUser.then(redirect('./'));
        console.log(newUser);
    } catch (error: any) {
        console.log(error)
    }
}

export const getUsers = async (userId: string) => {
    try {
        const user = await users.get(userId);
    } catch (error) {
        console.log(error);
    }
}