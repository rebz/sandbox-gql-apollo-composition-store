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
import { ref, reactive } from '@vue/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import { GET_CHARACTERS } from '@/gql/queries/characters'
import Character from '@/components/Character.vue'

export default {
  components: {
    Character
  },
  setup() {

    const { loading, error, result } = useQuery(GET_CHARACTERS)
    const characters = useResult(result, [], (data) => data.characters.results)

    
    return {
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