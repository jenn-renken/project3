import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
    query pets {
      pets {
        _id
        petPersonality
        petPreference
        petBreed
        name
        createdAt
        userId
        commentCount
        comments {
          _id
          createdAt
          username
          commentBody
        }
  }
        
    }
`;

export const QUERY_PET = gql`
    query pet($id: ID!) {
        pet(_id: $id) {
            _id
            petPersonality
            petPreference
            petBreed
            name
            createdAt
            username
            commentCount
            comments {
              _id
              createdAt
              username
              commentBody
            }
        }
    }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pets {
        _id
        petPersonality
        petPreference
        petBreed
        name
        createdAt
      }
      pets {
        _id
        petText
        createdAt
        commentCount
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  {
    profile {
      _id
      username
      email
      pets {
        _id
        petPersonality
        petPreference
        petBreed
        name
        createdAt
        username
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;

export const QUERY_PROFILE_BASIC = gql`
{ 
  profile {
      _id
      username
      email
    }
  }
`