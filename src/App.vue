<template>
    <div id="app">
        <navbar />

        <router-view />

        <h2>Store Information</h2>

        <pretty-pre>
            {{ store }}
        </pretty-pre>
    </div>
</template>

<script>
import PrettyPre from "@/components/PrettyPre.vue";
import Navbar from "@/components/Navbar.vue";
import { useStore } from "@/store";
import { createFormStore } from "@/store/form";
import { 
    CHARACTER_FORM_SCHEMA,
    LOCATION_FORM_SCHEMA,
    EPISODE_FORM_SCHEMA,
} from "@/config/schemas";

export default {
    components: {
        Navbar,
        PrettyPre,
    },
    setup() {
        /**
         * Register multiple form stores, one for each model.
         */
        const { registerStoreModule } = useStore();
        registerStoreModule("character", createFormStore(CHARACTER_FORM_SCHEMA));
        registerStoreModule("location", createFormStore(LOCATION_FORM_SCHEMA));
        registerStoreModule("episode", createFormStore(EPISODE_FORM_SCHEMA));

        const store = useStore();

        return {
            store,
        };
    },
};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-top: 64px;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
