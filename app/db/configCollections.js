import { createUserIndexes } from "./user.model.js";

export async function configCollections() {
  try {
    await createUserIndexes();
    console.log('collections configured')
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
