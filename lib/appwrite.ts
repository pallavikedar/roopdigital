import { Client, Account, Databases, Storage } from "appwrite"

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // your appwrite endpoint
  .setProject("68c5199f0022f542138f")

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
