import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.md.aora",
  projectId: "6628b93767a8d7dd38b2",
  databaseId: "662a1a5c46aab73dec2e",
  userCollectionId: "662a1a78dafc008775bd",
  videoCollectionId: "662a1aa958e6efd59b31",
  storageId: "662a1c0c976ae73df7d4"
}

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )

    if (!newAccount) throw Error

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl
      }
    )

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}