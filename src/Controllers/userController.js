import UserRepository from "../Repository/UserRepository.js";

export default class userController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(req, res) {
    try {
      res.status(200).send(await this.userRepository.getAllUsers());
    } catch (error) {
      console.error(error);
      res.status(401).send({ error: error.mensage });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json(await this.userRepository.getUserById(id));
    } catch (error) {
      console.log(console.error(error));
      res.status(401).json({ error: error.mensage });
    }
  }
}
