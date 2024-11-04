import { connect } from "../Database/Banco.js";
const con = await connect.connect();

export default class UserService {

  async getUserById(id) {
    const queryLocal = {
      name: "fetch-userById",
      text: "SELECT * FROM users WHERE id = $1",
      values: [id],
    };
    const data = await con
      .query(queryLocal)
      .then((dados) => {
        console.log("Dados sendo enviados UserById");

        return dados.rows;
      })
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });
    return data;
  }

  async getAllUsers() {
    const queryLocal = {
      name: "fetch-all-users",
      text: "SELECT * FROM users",
    };

    const data = await con
      .query(queryLocal)
      .then((dados) => {
        console.log("Dados sendo enviados todos Usuários");
        return dados.rows;
      })
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });
    return data;
  }
}
