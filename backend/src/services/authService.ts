import { dbsource } from "../db/data-source";
import { User } from "../models/User";

const userRepo = dbsource.getRepository(User);

export const registerUser = async (email: string, password: string) => {
    userRepo.create()
};
