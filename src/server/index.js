const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { schema } = require('./graphql')
 
const server = new ApolloServer({ schema,
  playground: {
    settings: {
      'editor.theme': 'dark'
    }
  },
  tracing: true,
  engine: false
 });
 
const app = express();
server.applyMiddleware({ app, path: `/graphql` });
 
app.listen({ port: 3001 }, () =>
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`)
);