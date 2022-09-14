const { ApolloServer, gql } = require("apollo-server");
const UsersApi = require("./users-api");
const CommentsAPI = require("./comments-api");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: String!
    name: String
    comments: [Comment]
  }

  type Comment {
    userId: String!
    data: String
  }

  type Query {
    getUsers: [User]
    getUserWithId(id: String!): User
    getComments: [Comment]
    getCommentsForUser(userId: String!): [Comment]
  }
`;

const resolvers = {
  Query: {
    getUsers: async (root, _args, { dataSources }) => {
      return await dataSources.userAPI.getUsers();
    },
    getUserWithId: async (root, _args, { dataSources }) => {
      console.log("_args", _args);
      return await dataSources.userAPI.getUserWithId(_args.id);
    },
    getComments: async (root, _args, { dataSources }) => {
      return await dataSources.commentsAPI.getComments();
    },
    getCommentsForUser: async (root, _args, { dataSources }) => {
      console.log("_args", _args);
      return await dataSources.commentsAPI.getCommentsForUser(_args.userId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      userAPI: new UsersApi(),
      commentsAPI: new CommentsAPI(),
    };
  },
  plugins: [],
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
