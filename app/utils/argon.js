import { hash, verify } from "argon2";

export const verifyPassword = async (hashedP, password) => {
  try {
    if (await argon2.verify(hashedP, password)) {
      return true
    } else {
        return false
   
    }
  } catch (err) {
    return false
  }
};

export const hashPassword = async () => {
  try {
    const hash = await argon2.hash("password");
    return hash
  } catch (err) {
    return null
    //...
  }
};
