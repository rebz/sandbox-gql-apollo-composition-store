<template>
    <nav class="nav">
        <router-link :to="{ name: 'characters.index' }" exact>
            Characters
        </router-link>
        <router-link :to="{ name: 'multi.form' }">
            Multi Form
        </router-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 10;
        background: rgba(255,255,255,0.8);
        padding: 8px;
        backdrop-filter: blur(10px) grayscale(0.5);

        a {
            height: 38px;
            padding: 8px 16px;
            text-decoration: none;
            font-weight: bold;
            margin: 0 8px;
            border-radius: 4px;
            display: flex;
            color: tomato;
            justify-content: center;
            align-items: center;
            border: solid 2px rgb(223, 211, 209);

            &.active {
                background: tomato;
                border-color: transparent;
                color: rgb(247, 224, 220);

            }
            &:hover {
                border-color: tomato;
            }
        }
    }
</style>