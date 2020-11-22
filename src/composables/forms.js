import { useStore } from '@/store'
import { reactive, watch, ref } from '@vue/composition-api'

export const useForm = (model, id = undefined) => {

    const { store } = useStore()
    if (!store?.[model]) throw new Error(`store model '${model}' was not found`)

    // Use ID or create an empty model and return a tempId
    const modelId = id || store?.[model]?.newModel()

    // check if data exists for the given id
    if (!store?.[model]?.byId?.[modelId]) store?.[model]?.setById(id)
    
    // Method for removing the data from the store
    const cancelForm = () => store?.[model]?.removeByIds([modelId])

    // a reference to bind UI components to
    const modelRef = ref({})

    // when the data loads update the `modelRef`
    watch(() => store?.[model]?.byId?.[modelId], val => {
        if (!val) return
        console.info('useForm', model, id, modelId)
        modelRef.value = val
    }, { immediate: true })

    return {
        [model]: modelRef,
        cancelForm
    }
}