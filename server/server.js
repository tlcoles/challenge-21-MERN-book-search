const express = require('express');
// require ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
// remove routes
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
// use ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// remove old routes setup
// app.use(routes);
// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });

// create a new instance of ApolloServer with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

// call the async function to start the server
startApolloServer(typeDefs, resolvers);
