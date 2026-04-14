import bcrypt from "bcrypt";

export const createHash = (password) => bcrypt.hashSync(password, 10);