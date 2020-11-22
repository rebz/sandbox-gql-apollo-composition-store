import { useQuery, useResult, useLazyQuery } from '@vue/apollo-composable'
import { GET_CHARACTER_BY_ID } from '@/gql/queries/characters'
import { reactive } from '@vue/composition-api'

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

export const useLazyCharacterById = () => {

    const options = reactive({
        enabled: false
    })
    const variables = reactive({
        id: null
    })

    const { refetch, loading, result, error, onResult } = useQuery(GET_CHARACTER_BY_ID, variables, options)
    const character = useResult(result, false)

    const getById = (id = undefined) => {
        if (!id) throw new Error(`'id' was not defined`)
        variables.id = id
        if (!options.enabled) {
            options.enabled = true
            return
        }
        refetch({ id }, { notifyOnNetworkStatusChange: true })
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