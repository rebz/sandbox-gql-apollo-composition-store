<template>
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
</template>

<script>
import { useCharacters } from '@/composables/character'
import Character from '@/components/Character.vue'

export default {
  components: {
    Character
  },
  setup() {

    const { loading, characters } = useCharacters()
    
    return {
      loading,
      characters
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>