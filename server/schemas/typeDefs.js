const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Number
  savedBooks: [Book]
}

type Book {
  bookId: String
  authors: [bookSchema] //! not sure this is right here; search "savedBooks: [bookSchema]" as example
  description: String
  title: String
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User //! do I need the square brackets or is that only used for arrays?
  }

type Mutation {
  login(email: String!, password: String!): Auth

  addUser(username: String!, email: String!, password: String!): Auth

  saveBook(book: Book!): User //! Henriette solution to make single book reference Book type above

  removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;