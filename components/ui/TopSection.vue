<template>
    <section class="topSection relative">
        <AppImage
            :image="topSection.background_image.sizes.large"
            :lazy="false"
            classes="ab100"
        />
        <div class="overlay ab100"></div>
        <div class="container flex items-end h-full relative">
            <h1>{{ topSection.heading }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        topSection: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>
.topSection {
    padding: 90px 0;
    margin-bottom: 80px;
    height: 500px;
    color: #fff;
}
.overlay {
    background-color: var(--primaryColor);
    opacity: 0.8;
}
</style>
