import { set, del, reactive } from "@vue/composition-api"
import { v4 as uuid } from 'uuid'

export const createModelStore = () => {

    const byId = reactive({})

    /**
     * Method for creating a temp 
     * character for our forms.
     */
    const newModel = (fields = undefined) => {

        if (!fields) throw new Error('`fields` must be defined when creating a new moddel')

        const tempId = uuid()
        set(byId, tempId, fields)

        return tempId
    }

    /**
     * Provide an array of IDs to 
     * have them removed from 
     * the `byId` state.
     */
    const removeByIds = (ids = []) => {
        for (const id of ids) {
            del(byId, id)
        }
    }

    return {
        byId,
        newModel,
        removeByIds
    }
}