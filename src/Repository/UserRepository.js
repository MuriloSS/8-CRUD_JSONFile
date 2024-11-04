import UserService from "../Services/userService.js";


export default class UserRepository {
    constructor(){
      this.userService = new UserService();
    }

  async getUserById(id) {
    try {
      const usersById = await this.userService.getUserById(id);
      return usersById;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUsers() {
    try {
      const users = await this.userService.getAllUsers() ;
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }
}
