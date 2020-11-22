import { useQuery, useResult, useLazyQuery } from '@vue/apollo-composable'
import { GET_CHARACTER_BY_ID } from '@/gql/queries/characters'

export const useCharacterById = (characterId) => {

    const { loading, error, result } = useQuery(GET_CHARACTER_BY_ID, {
        id: characterId
    })
    const character = useResult(result, false)

    return {
        loading, 
        error, 
        character
    }
}

export const useLazyCharacterById = () => {

    const { load, loading, result, error, onResult } = useLazyQuery(GET_CHARACTER_BY_ID)
    const character = useResult(result, false)

    const getById = (id = undefined) => {
        if (!id) throw new Error(`'id' was not defined`)
        load(null, { id }, { notifyOnNetworkStatusChange: true })
        // TODO :: determine if we fetched it or had it cached
    }

    return {
        getById,
        loading,
        error,
        onResult,
        character
    }
}