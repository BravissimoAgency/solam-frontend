<template>
    <div class="locations flex flex-wrap justify-between">
        <div
            v-for="(location, index) in locations"
            :key="index"
            class="location"
        >
            <h3>{{ location.name }}</h3>
            <p v-html="location.address"></p>
            <p>{{ location.phone }}</p>
            <p v-if="location.fax">{{ location.fax }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        locations: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>

</style>
