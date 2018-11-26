<template>
    <div class="page">
        <TopSection
            :top-section="page.top_section"
        />
    </div>
</template>

<script>
import TopSection from '../components/ui/TopSection.vue';
import { getMeta, updatePage } from '../utils/helpers';

export default {
    components: {
        TopSection,
    },
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
