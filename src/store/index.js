import { set, del, provide, inject, reactive } from "@vue/composition-api"

export const createStore = () => {

    const store = reactive({})

    const registerStoreModule = (moduleName, storeModule) => {
        set(store, moduleName, storeModule)
    }

    const unregisterStoreModule = (moduleName) => {
        del(store, moduleName)
    }
    
    return {
        store,
        registerStoreModule,
        unregisterStoreModule
    }
}

export const StoreProvider = {
    setup(props, context) {
        provide('store', createStore())
        return () => context.slots.default();
    }
}

export const useStore = () => {
    const store = inject('store');
    if (!store) throw new Error("`store` doesn't exist");
    return store;
}