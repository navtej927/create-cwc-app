const { RESTDataSource } = require("apollo-datasource-rest");

class CommentsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:4002/api/comments";
  }

  async getComments() {
    return await this.get("");
  }

  async getCommentsForUser(id) {
    return await this.get(`/${id}`);
  }
}

module.exports = CommentsAPI;
