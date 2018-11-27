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
            <section
                v-if="module.acf_fc_layout === 'two_column'"
                :key="index"
                class="twoColumnSection"
            >
                <div class="container">
                    <TwoColumn>
                        <div
                            slot="left"
                            class="content"
                            v-html="module.left_column"
                        ></div>
                        <div
                            v-if="module.right_column"
                            slot="right"
                            class="content"
                            v-html="module.right_column"
                        ></div>
                    </TwoColumn>
                </div>
            </section>
            <Shortcuts
                v-if="module.acf_fc_layout === 'shortcuts'"
                :key="index"
                :ids="module.shortcuts"
            />
            <Applications
                v-if="module.acf_fc_layout === 'applications'"
                :key="index"
            />
            <ContactSection
                v-if="module.acf_fc_layout === 'contact_info'"
                :key="index"
            />
            <CompanyInfo
                v-if="module.acf_fc_layout === 'company_info'"
                :key="index"
                :company-info="module"
            />
        </template>
    </div>
</template>

<script>
import TopSection from '../components/ui/TopSection.vue';
import PreambleImage from '../components/ui/PreambleImage.vue';
import Accordions from '../components/Accordions.vue';
import Products from '../components/Products.vue';
import TwoColumn from '../components/ui/TwoColumn.vue';
import Shortcuts from '../components/Shortcuts.vue';
import Applications from '../components/Applications.vue';
import ContactSection from '../components/ContactSection.vue';
import CompanyInfo from '../components/CompanyInfo.vue';
import { getMeta, updatePage } from '../utils/helpers';

export default {
    components: {
        TopSection,
        PreambleImage,
        Accordions,
        Products,
        TwoColumn,
        Shortcuts,
        Applications,
        ContactSection,
        CompanyInfo,
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
.twoColumnSection {
    margin-bottom: 80px;
}
</style>
