<template>
    <div class="app">
        <TheHeader/>
        <div class="inner">
            <main class="main">
                <nuxt/>
            </main>
        </div>
        <TheFooter v-if="$route.path !== '/'"/>
        <portal-target name="endOfPage"/>
    </div>
</template>

<script>
import TheFooter from '../components/layout/TheFooter.vue';
import TheHeader from '../components/layout/TheHeader.vue';

export default {
    components: {
        TheFooter,
        TheHeader,
    },
};
</script>

<style lang="postcss" scoped>
</style>
