<template>
    <div class="app">
        <TheHeader/>
        <div class="inner">
            <main class="main">
                <nuxt/>
            </main>
        </div>
        <portal-target name="endOfPage"/>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader,
    },
};
</script>

<style lang="postcss" scoped>
</style>
