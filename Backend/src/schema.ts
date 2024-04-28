import { buildSchema } from "graphql";

const schema = buildSchema(`
    
    scalar DateTime

    type Profile {
        ProfileID: ID!
        Name: String!
        Surname: String!
        DateOfBirth: DateTime
        Gender: String
        Email: String!
        Password: String!
        Image: String
    }

    type Query {
        getProfile(ProfileID: ID!): Profile
        login(Email: String!, Password: String!): Profile
    }

    type Mutation {
        createProfile(Name: String!, Surname: String!, DateOfBirth: DateTime, Gender: String, Email: String!, Password: String!): Profile
    }
`);

export default schema;


