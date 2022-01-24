const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pets: [Pet]
  }

  type Pet {
    _id: ID
    petPersonality: String
    petPreference: String
    petBreed: String
    createdAt: String
    username: String
    name: String
    image: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    profile: User
    users: [User]
    user(username: String!): User
    pets(username: String): [Pet]
    pet(_id: ID!): Pet
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet( 
        petPersonality: String!
        petPreference: String!
        petBreed: String!
        name: String!
        image: String!): Pet
  removePet(
    petPersonality: String!
        petPreference: String!
        petBreed: String!
        name: String!
        image: String!): Pet
  }
  `;

  module.exports = typeDefs;

  //for future add to type User 
  //  friendCount: Int
  //  friends: [User]

  //add to type Pet
  //commentCount: Int
  //comments: [Comment]

  //add to mutation
  //addReaction(thoughtId: ID!, reactionBody: String!): Thought
  //addFriend(friendId: ID!): User