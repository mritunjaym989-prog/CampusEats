const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const fs = require('fs');
const path = require('path');
const db = require('./db');

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

const resolvers = {
  Query: {
    dishes: async () => {
      const [rows] = await db.query('SELECT * FROM dishes');
      return rows;
    },
    dish: async (_, { id }) => {
      const [rows] = await db.query('SELECT * FROM dishes WHERE id = ?', [id]);
      return rows[0] || null;
    }
  },
  Mutation: {
    addDish: async (_, { input }) => {
      const { name, price, available = true } = input;
      const [result] = await db.query(
        'INSERT INTO dishes (name, price, available) VALUES (?, ?, ?)',
        [name, price, available]
      );
      return { id: result.insertId, name, price, available };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});