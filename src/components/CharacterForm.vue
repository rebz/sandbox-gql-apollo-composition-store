<template>
    <form v-if="character">

        <div class="form-input">
            <label>
                Name
            </label>
            <input type="text" v-model="character.name" />
        </div>

        <div class="form-input">
            <label>
                Status
            </label>
            <input type="text" v-model="character.status" />
        </div>

        <div class="form-input">
            <label>
                Species
            </label>
            <input type="text" v-model="character.species" />
        </div>

        <div class="form-input">
            <label>
                Type
            </label>
            <input type="text" v-model="character.type" />
        </div>

        <div class="form-input">
            <label>
                Gender
            </label>
            <input type="text" v-model="character.gender" />
        </div>

    </form>
</template>

<script>
    import { useForm } from '@/composables/forms'
    import { onUnmounted } from '@vue/composition-api';

    export default {
        props: ['id'],
        setup(props) {

            const { 
                character,
                cancelForm
            } = useForm('character', props?.id)

            onUnmounted(() => {
                cancelForm();
            })

            return {
                character,
                cancelForm
            }
        },
    }
</script>

<style lang="scss" scoped>
    form {
        max-width: 320px;
        margin: 0 auto;   
    }
    .form-input {
        margin: 12px 0;
    
        label {
            display: block;
            font-size: 12px;
        }

    }
    input, select {
        font-size: 16px;
        width: 100%;
        padding: 6px 12px;
        height: 48px;
    }
</style>