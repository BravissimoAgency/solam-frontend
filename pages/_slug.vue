<template>
    <div class="page">
        <div class="container">
            <h1 class="text-center">{{ page.top_section.heading }}</h1>
        </div>
    </div>
</template>

<script>
import { getMeta, updatePage } from '../utils/helpers';

export default {
    head() {
        return getMeta(this.page.yoast);
    },
    data: () => ({
        page: false,
    }),
    async asyncData({ route }) {
        let { path } = route;

        if (path.includes('.')) return false;

        path = path.replace(/\//g, '-_-');
        path = path.replace(/\\/g, '-_-');
        const data = await import(`../static/json/${path}.json`);
        return { page: Object.assign({}, data) };
    },
    async mounted() {
        const page = await updatePage(this.$route.path);
        if (page) {
            this.page = page;
        }
    },
};
</script>

<style lang="postcss" scoped>
</style>
