import { gql } from "@apollo/client"

const CLASSIFIEDS = gql`
  query classifieds($cat: String!){
    classifieds(cat: $cat) {
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