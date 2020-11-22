import { set, del, reactive } from "@vue/composition-api"
import { v4 as uuid } from 'uuid'

export const createFormStore = () => {

    const byId = reactive({})

    /**
     * Method for creating a temp 
     * character for our forms.
     */
    const newForm = (fields = undefined) => {

        if (!fields) throw new Error('`fields` must be defined when creating a new moddel')

        const tempId = `_${uuid()}`
        set(byId, tempId, { ...fields, id: tempId })

        return tempId
    }

    /**
     * Method for setting the byId.
     */
    const setById = (id, val) => {
        if (!id || !val) return
        set(byId, id, {...val})
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
        setById,
        newForm,
        removeByIds
    }
}