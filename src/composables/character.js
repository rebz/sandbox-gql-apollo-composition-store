import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_CHARACTER_BY_ID, GET_CHARACTERS } from '@/gql/characters'

export const useCharacters = () => {

    const { loading, error, result } = useQuery(GET_CHARACTERS)
    const characters = useResult(result, [], (data) => data.characters.results)
    
    return {
        loading, 
        error, 
        characters
    }
}

export const useCharacterById = (characterId) => {

    const { loading, error, result } = useQuery(GET_CHARACTER_BY_ID, {
        id: characterId
    }, {
        enabled: !!characterId
    })
    const character = useResult(result, false)

    return {
        loading, 
        error, 
        character
    }
}