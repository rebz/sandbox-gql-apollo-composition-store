<template>
    <div>

        <character 
            :character="character" 
        />

        <div class="buttons">
            <router-link class="button button-grey" :to="{
                name: 'characters.index',
            }">
                Back
            </router-link>

            <router-link class="button" :to="{
                name: 'character.edit',
                params: {
                    id: characterId
                }
            }">
                Edit Character
            </router-link>
        </div>

    </div>
</template>

<script>
import { useCharacterById } from "@/composables/character";
import Character from "@/components/Character.vue";

export default {
    components: { Character },
    setup(props, { root }) {
        const characterId = root.$route?.params?.id;

        const { loading, error, character } = useCharacterById(characterId);

        return {
            loading,
            character,
            characterId
        };
    }
};
</script>

<style lang="scss" scoped>

</style>