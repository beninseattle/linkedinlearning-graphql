import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './data/resolvers'
import schema from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));