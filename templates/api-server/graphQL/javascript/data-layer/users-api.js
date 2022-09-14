const { RESTDataSource } = require("apollo-datasource-rest");
const axios = require("axios");

class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4001/api/users";
  }

  async getUsers() {
    return await this.get("");
  }

  async getUserWithId(id) {
    const user = await this.get(`/${id}`);
    const res = await axios.get(`http://localhost:4000/api/comments/${id}`);
    return {
      ...user,
      comments: [...res.data],
    };
  }
}

module.exports = UsersApi;
