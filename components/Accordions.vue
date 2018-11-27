<template>
    <section class="accordions">
        <div class="container">
            <Accordion
                v-for="(accordion, index) in accordions"
                :key="index"
                :title="accordion.title"
                :show-logo="showLogo"
            >
                <TwoColumn>
                    <div
                        slot="left"
                        class="content"
                        v-html="accordion.left_column"
                    ></div>
                    <div
                        v-if="accordion.right_column"
                        slot="right"
                        class="content"
                        v-html="accordion.right_column"
                    ></div>
                </TwoColumn>
            </Accordion>
        </div>
    </section>
</template>

<script>
import Accordion from './Accordion.vue';
import TwoColumn from './ui/TwoColumn.vue';

export default {
    components: {
        Accordion,
        TwoColumn,
    },
    props: {
        accordions: {
            type: Array,
            required: true,
        },
        showLogo: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="postcss" scoped>
.accordions {
    margin-bottom: 80px;
}
</style>
