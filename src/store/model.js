import { createFormStore } from '@/store/form'
// import { set, del, watch } from '@vue/composition-api'

export const createModelFormStore = (
    formSchema = {}
) => {

    const {
        byId, 
        setById,
        newForm,
        removeByIds
    } = createFormStore()

    /**
     * Create a blank model; the form schema.
     */
    const newModel = () => newForm(formSchema)

    return {
        byId,
        setById,
        newModel,
        removeByIds,
    }
}