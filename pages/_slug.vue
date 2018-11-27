<template>
    <div class="page">
        <TopSection
            :top-section="page.top_section"
        />
        <template
            v-for="(module, index) in page.modules"
        >
            <PreambleImage
                v-if="module.acf_fc_layout === 'preamble_image'"
                :key="index"
                :preamble-image="module"
            />
            <Accordions
                v-if="module.acf_fc_layout === 'toggles'"
                :key="index"
                :accordions="module.toggles"
            />
            <Products
                v-if="module.acf_fc_layout === 'products'"
                :key="index"
            />
        </template>
    </div>
</template>

<script>
import TopSection from '../components/ui/TopSection.vue';
import PreambleImage from '../components/ui/PreambleImage.vue';
import Accordions from '../components/Accordions.vue';
import Products from '../components/Products.vue';
import { getMeta, updatePage } from '../utils/helpers';

export default {
    components: {
        TopSection,
        PreambleImage,
        Accordions,
        Products,
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
