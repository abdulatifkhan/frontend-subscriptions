import { gql } from "@apollo/client"

const CLASSIFIEDS = gql`
  query {
    classifieds {
      id
      title
    }
  }
`

const SUBSCRIPTION = gql`
  subscription {
    createdClassified {
      title
    }
  }
`

export {
  CLASSIFIEDS,
  SUBSCRIPTION,
}