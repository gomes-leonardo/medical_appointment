import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUsecase {
  async execute(data: UserRequest) {
    const userRepository = UserRepository.getInstance();
    const user = User.create(data);

    if (!data.username || !data.password) {
      throw new Error("Username and Password are required");
    }

    const existUser = await userRepository.findByUserName(data.username);

    if (existUser) {
      throw new Error("Username already exists");
    }


    const userCreated = await userRepository.save(user);
    return userCreated;
  }
}
