import { useStore } from '@/store'
import { computed, watch, ref } from '@vue/composition-api'

export const useForm = (model, id = undefined) => {

    // const uid = uuid()

    const { store } = useStore()
    if (!store?.[model]) throw new Error(`store model '${model}' was not found`)

    // Use ID or create an empty model and return a tempId
    const modelId = id || store?.[model]?.newModel()

    // Method for removing the data from the store
    const cancelForm = () => store?.[model]?.removeByIds([modelId])

    // a reference to bind UI components to
    const form = ref({})

    // when the data loads update the `modelRef`
    watch(() => store?.[model]?.byId?.[modelId], val => {
        if (!val) return
        form.value = val
    }, { immediate: true, deep: true })

    /**
     * 
     */
    const setForm = store?.[model]?.setById

    /**
     * Determine if the form model is 
     * being updated or created.
     */
    const isCreating = computed(() => form.value?.id?.[0] === '_')

    return {
        form,
        setForm,
        isCreating,
        cancelForm,
    }
}