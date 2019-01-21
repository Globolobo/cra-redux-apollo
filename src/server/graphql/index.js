const tools = require('graphql-tools')
const path = require('path')
const fs = require('fs')
const resolvers = require('./resolvers')

const typeDefs = (() =>
  fs.readdirSync(path.join(__dirname, '/schema/'))
    .map(currFile =>
      fs.readFileSync(path.join(__dirname, '/schema/', currFile)).toString())
)()

const schema = tools.makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = { schema }
