const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        // find all books
        books: async () => {
            return Book.find({});
        }

        //!  get a single user by either their id or their username
        // insert code here

        //!  create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
        // insert code here

        //!  login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
        // insert code here

        //!  save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
        // insert code here

        //!  remove a book from `savedBooks`
        // insert code here

    }
};

module.exports = resolvers;
