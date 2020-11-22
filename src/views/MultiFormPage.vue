<template>
    <div class="boxes">
        <div class="box">
            <character-form id="1" />
        </div>
        <div class="box">
            <character-form id="5" />
        </div>
        <div class="box">
            <character-form id="2" />
        </div>
        <div class="box">
            <character-form />
        </div>
    </div>
</template>

<script>
    import CharacterForm from '../components/CharacterForm.vue'
    export default {
        components: { CharacterForm },
    }
</script>

<style lang="scss" scoped>
    .boxes {
        display: flex;
        justify-content: center;
    }

    .box {
        padding: 12px;
        border: solid 1px grey;
        margin: 12px;
    }
</style>