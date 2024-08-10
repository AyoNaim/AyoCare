"use server"

import { Account, Client, ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { redirect } from "next/navigation";
import { parseStringify } from "../utils";

const client = new Client()
client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject('66a82f3d0001bbe2c367');

const account = new Account(client);


// export const createUser = () => {
//     try {
//         const newUser = account.create(
//             ID.unique(), 'ayonaim101@gmail.com', 'password'
//         );
//         console.log(newUser);
//     } catch (error: any) {
//         console.log(error)
//     }
// }

// export const getUsers = async (userId: string) => {
//     try {
//         const user = await users.get(userId);
//     } catch (error) {
//         console.log(error);
//     }
// }

export const createUser = async (user: CreateUserParams) => {
    try {
      // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
      const newuser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name
      );
  
      return parseStringify(newuser);
    } catch (error: any) {
      // Check existing user
      if (error && error?.code === 409) {
        const existingUser = await users.list([
          Query.equal("email", [user.email]),
        ]);
  
        return existingUser.users[0];
      }
      console.error("An error occurred while creating a new user:", error);
    }
}