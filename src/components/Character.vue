<template>
    <div class="character">
        <div class="character-con">
            <h2>{{ character.name }}</h2>
            <img :src="character.image" :alt="character.name" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['character'],
        setup() {
            
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .character {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;

        &-con {
            position: relative;
            max-width: 200px;
        }

        h2 {
            font-size: 16px;
            position: absolute;
            bottom: -10px;
            right: -20px;
            padding: 4px 8px;
            margin: 0;
            background: #f1f1f1;
            border-radius: 3px;
            border: solid 4px white;
        }

        img {
            max-width: 156px;
        }
    }
</style>