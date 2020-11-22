<template>
    <form v-if="form">

        <span class="badge" v-if="isCreating">
            Creating
        </span>

        <div class="form-input">
            <label>
                Name
            </label>
            <input type="text" v-model="form.name" />
        </div>

        <div class="form-input">
            <label>
                Status
            </label>
            <input type="text" v-model="form.status" />
        </div>

        <div class="form-input">
            <label>
                Species
            </label>
            <input type="text" v-model="form.species" />
        </div>

        <div class="form-input">
            <label>
                Type
            </label>
            <input type="text" v-model="form.type" />
        </div>

        <div class="form-input">
            <label>
                Gender
            </label>
            <input type="text" v-model="form.gender" />
        </div>

    </form>
</template>

<script>
    import { useForm } from '@/composables/forms'
    import { watch, onUnmounted } from '@vue/composition-api';
    import { useCharacterById } from '@/composables/character';

    export default {
        props: ['id'],
        setup(props) {

            const { 
                form,
                setForm,
                isCreating,
                cancelForm,
            } = useForm('character', props?.id)

            const { 
                character,
                loading,
            } = useCharacterById(props?.id)

            watch(character, val => setForm(val.id, val), { immediate: true, deep: true })

            onUnmounted(() => {
                cancelForm();
            })

            return {
                form,
                isCreating,
                character,
                loading
            }
        },
    }
</script>

<style lang="scss" scoped>
    form {
        max-width: 320px;
        position: relative;
        padding: 12px;
        border: solid 1px grey;
        margin: 12px;

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
    .badge {
        position: absolute;
        top: -12px;
        right: -8px;
        border: solid 1px grey;
        background: rgb(218, 225, 235);
        font-size: 12px;
        font-weight: bold;
        border-radius: 4px;
        display: inline-flex;
        z-index: 1;
        padding: 4px 8px;
    }
</style>