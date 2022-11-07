import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                title
                description
                bookId
                image
                link
                authors //! is it possible that this needs to be different because it can be an array?
            }
        }
    }
`;
