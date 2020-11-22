<template>
    <div>
        <character :character="character" />

        <character-form :id="characterId" />

        <div class="buttons">
            <router-link class="button button-grey" :to="{
                name: 'character.view',
                params: {
                    id: characterId
                }
            }">
                Cancel
            </router-link>
            <button class="button button-green">
                Save
            </button>
        </div>
    </div>
</template>

<script>
import { useCharacterById } from "@/composables/character";
import Character from "@/components/Character.vue";
import CharacterForm from "@/components/CharacterForm.vue";

export default {
    components: { 
        Character, 
        CharacterForm 
    },
    setup(props, { root }) {
        const characterId = root.$route?.params?.id;

        const { 
            loading, 
            error, 
            character
        } = useCharacterById(characterId);
        
        return {
            loading,
            character,
            characterId,
        };
    },
};
</script>

<style lang="scss" scoped>

</style>
