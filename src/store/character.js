import { createModelStore } from '@/store/model'
import { useLazyCharacterById } from '@/composables/character'
import { set, del, watch } from '@vue/composition-api'

export const createCharacterStore = () => {

    const {
        byId, 
        newModel: createNewModel,
        removeByIds
    } = createModelStore()

    /**
     * Create a blank model; the form schema.
     */
    const newModel = () => createNewModel({
        name: '',
        status: '',
        species: '',
        type: '',
        gender: ''
    })

    /**
     * Provide method for loading characters.
     */
    const { getById, onResult, character } = useLazyCharacterById()
    onResult(val => {
        const char = val?.data?.character
        if (!char?.id) return
        set(byId, char.id, {...char})
    })

    /**
     * Method for setting the byId. `onResult` will 
     * not fire a second time if the same ID was 
     * requested twice in a row. This 
     * method resolves that issue.
     */
    const setById = (id) => {
        if (!id) throw new Error('`id` required')

        if (character.value?.id === id) {
            set(byId, id, {...character.value})
            return
        }

        getById(id)
    }

    return {
        byId,
        setById,
        newModel,
        removeByIds,
    }
}