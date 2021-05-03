import { inject } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { GET_CHARACTER_BY_ID, GET_CHARACTERS } from '@/gql/characters'

export const useCharacters = () => {

    const apolloClient = inject(DefaultApolloClient);

    const { loading, error, result, refetch } = useQuery(GET_CHARACTERS)
    const characters = useResult(result, [], (data) => data.characters.results)

    const clearCacheAndRefetch = () => {
        // apolloClient.cache.evict({ id: 'ROOT_QUERY', fieldName: 'characters' })

        // Object.keys(apolloClient.cache.data.data).forEach(key => 
        //     key.match(/^Character/) && apolloClient.cache.data.delete(key)
        // )
        refetch()
    }
    
    return {
        clearCacheAndRefetch,
        refetch,
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