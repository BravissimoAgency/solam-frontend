<template>
    <div class="page py-6">
        <div class="container">
            <h1 class="text-center">{{ page.post_title }}</h1>
        </div>
    </div>
</template>

<script>
import page from '../static/json/-_-.json';
import { getMeta, updatePage } from '../utils/helpers';

export default {
    head() {
        return getMeta(this.page.yoast);
    },
    data: () => ({
        page,
    }),
    async mounted() {
        const res = await updatePage('hem');
        if (res) {
            this.page = res;
        }
    },
};
</script>

<style lang="postcss" scoped>
</style>
