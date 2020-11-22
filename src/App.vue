<template>
  <div id="app">
    
    <navbar />

    <router-view />
    
    <h2>
      Store Information
    </h2>

    <pretty-pre>
      {{ store }}
    </pretty-pre>

  </div>
</template>

<script>
    import { useStore } from '@/store'
    import { createCharacterStore } from '@/store/character'
    import PrettyPre from '@/components/PrettyPre.vue'
    import Navbar from '@/components/Navbar.vue'

    export default {
      components: {
        Navbar,
        PrettyPre
      },
      setup() {
        const { registerStoreModule } = useStore()
        registerStoreModule('character', createCharacterStore())

        const store = useStore()

        return {
          store
        }
      }
    }
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
