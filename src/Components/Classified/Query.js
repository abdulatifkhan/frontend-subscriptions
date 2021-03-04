import { gql } from "@apollo/client"

const CLASSIFIEDS = gql`
  query {
    classifieds {
      id
      title
    }
  }
`

export {
  CLASSIFIEDS,
}