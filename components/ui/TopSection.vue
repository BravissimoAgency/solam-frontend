<template>
    <section class="topSection relative">
        <AppImage
            :image="topSection.background_image.url"
            :alt="topSection.background_image.alt"
            :lazy="false"
            classes="ab100"
        />
        <div class="overlay ab100"></div>
        <div class="container flex items-end h-full relative">
            <h1 class="heading">{{ topSection.heading }}</h1>
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
    padding: 75px 0;
    margin-bottom: 84px;
    height: 508px;
    color: #fff;
    @media (--laptop) {
        height: 350px;
        padding: 40px 0;
    }
}
.overlay {
    background-color: var(--primaryColor);
    opacity: 0.8;
}
.heading {
    margin-left: -6px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        top: 16px;
        left: -88px;
        width: 28px;
        height: 286px;
        transform: skew(-9deg);
        background-color: var(--secondaryColor);
        @media (--laptop) {
            left: -46px;
            width: 18px;
            height: 200px;
            transform: skew(-8deg);
        }
    }
}
</style>
