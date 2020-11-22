import gql from 'graphql-tag'

export const GET_CHARACTERS = gql`
    query {
        characters {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                image
            }
        }
    }
`

export const GET_CHARACTER_BY_ID = gql`
    query getCharacterById($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
        }
    }
`