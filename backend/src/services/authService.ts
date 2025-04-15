import { dbsource } from "../config/data-source";
import { User } from "../models/User";

export class AuthService {
  private userRepo = dbsource.getRepository(User);

  registerUser = async (user:User) => {
    const existingUser = await this.userRepo.findOneBy({username:user.username});
    if(existingUser) return 
    const savedUser = this.userRepo.create(user);
    this.userRepo.save(user);
    return user;
  };

  loginUser = async (email: string, password: string) => {
    const user = this.userRepo.findBy({ email });
    return user;
  };
}
