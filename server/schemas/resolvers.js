const { Book, User } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return Book.find({});
        }
    }
}