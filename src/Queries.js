import { gql } from "@apollo/client";

export const GET_USER_LIST = gql`
  query {
    User {
      UserName
      Email
      Role
    }
  }
`;
export const LOGIN_USER = gql`
  query Login($email: String, $password: String) {
    login(Email: $email, Password: $password) {
      Email
      Password
      Token
      id
      UserName
      Role
    }
  }
`;
export const LISTEMAIL = gql`
  query {
    FindByRole(Role: "Student") {
      UserName
      Role
      Email
    }
  }
`;
export const REMOVE = gql`
  query RemoveUser($removeUserId: ID) {
    removeUser(id: $removeUserId) {
      id
    }
  }
`;

export const UPDATEPROFILE = gql`
  query UpdateProfiles(
    $updateProfilesId: ID
    $firstName: String
    $lastName: String
    $phone: String
    $address: String
    $dob: String
    $photo: String
  ) {
    updateProfiles(
      id: $updateProfilesId
      FirstName: $firstName
      LastName: $lastName
      Phone: $phone
      Address: $address
      Dob: $dob
      Photo: $photo
    ) {
      id
      FirstName
      LastName
      Phone
      Address
      Dob
      Photo
    }
  }
`;

export const PROFILEDETAILS = gql`
  query Profiles {
    Profiles {
      User
      id
      FirstName
      LastName
      Phone
      Address
      Dob
      Photo
    }
  }
`;

// FindByIdUser(id: "630c848a9b14291111874f5c") {
//   UserName
//   Role
//   Email
// }
