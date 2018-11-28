<template>
    <section class="applications">
        <div
            v-for="application in applications"
            :key="application.id"
            class="application content"
        >
            <div class="container">
                <h2>{{ application.post_title }}</h2>
                <TwoColumn>
                    <div
                        slot="left"
                        v-html="application.left_column"
                    ></div>
                    <div
                        v-if="application.right_column"
                        slot="right"
                        v-html="application.right_column"
                    ></div>
                </TwoColumn>
            </div>
        </div>
    </section>
</template>

<script>
import TwoColumn from './ui/TwoColumn.vue';
import applications from '../static/json/applications.json';

export default {
    components: {
        TwoColumn,
    },
    data: () => ({
        applications,
    }),
};
</script>

<style lang="postcss" scoped>
.applications {
    padding: 0 100px;
    @media (--laptop) {
        padding: 0 50px;
    }
}
.application {
    padding-bottom: 80px;
    margin-bottom: 80px;
    border-bottom: 8px solid #f2f6f8;
    @media (--laptop) {
        padding-bottom: 60px;
        margin-bottom: 60px;
        border-bottom: 6px solid #f2f6f8;
    }
    &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
    }
}
</style>
