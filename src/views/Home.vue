<template>
  <div class="container">
    <button @click.prevent="clearCacheAndRefetch">
      Refetch
    </button>
    Loading: {{ loading }}
    <div class="grid">
      <router-link
        v-for="(char, index) in characters"
        :key="`link-character-${char.id}`"
        :to="{
          name: 'character.view',
          params: {
            id: char.id
          }
        }">
        <character
          :key="`character-${char.id}`"
          :character="char"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { useCharacters } from '@/composables/character'
import Character from '@/components/Character.vue'

export default {
  components: {
    Character
  },
  setup() {

    const { clearCacheAndRefetch, refetch, loading, characters } = useCharacters()
    
    return {
      clearCacheAndRefetch,
      refetch, 
      loading,
      characters
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>