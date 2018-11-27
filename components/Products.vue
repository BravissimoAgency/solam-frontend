<template>
    <Accordions
        :accordions="products"
        :show-logo="true"
    />
</template>

<script>
import Accordions from './Accordions.vue';
import productsJson from '../static/json/products.json';

export default {
    components: {
        Accordions,
    },
    data: () => ({
        productsJson,
    }),
    computed: {
        products() {
            return this.productsJson.map(product => ({
                title: product.post_title,
                ...product,
            }));
        },
    },
};
</script>

<style lang="postcss" scoped>
</style>
