<template>
    <div class="app">
        <TheHeader/>
        <div class="app__inner">
            <main class="page">
                <nuxt/>
            </main>
        </div>
        <portal-target name="endOfPage"/>
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
    components: {
        TheHeader,
    },
};
</script>

<style lang="postcss" scoped>
#app {
    display: flex;
    min-height: 100vh;
}
.page {
    width: calc(100% - 300px);
    margin-left: 300px;
    padding: 50px;
}
</style>
