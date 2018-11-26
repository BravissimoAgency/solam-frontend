<template>
    <picture>
        <source
            :srcset="webpImage"
            type="image/webp"
        >
        <img
            ref="image"
            :src="imageSrc"
            :alt="alt"
            :class="[classes, isLoaded ? 'loaded' : '']"
            class="appImage objectFitCover"
        >
    </picture>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
        },
        imageWebp: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            default: null,
        },
        classes: {
            type: String,
            default: null,
        },
        useWebp: {
            type: Boolean,
            default: true,
        },
        lazy: {
            type: Boolean,
            default: true,
        },
    },
    data: () => ({
        loaded: false,
    }),
    computed: {
        isLoaded() {
            return !this.lazy || this.loaded;
        },
        webpImage() {
            if (this.lazy && !this.loaded) return null;

            if (!this.useWebp) return this.image;

            return this.imageWebp ? this.imageWebp : `${this.image}.webp`;
        },
        imageSrc() {
            if (this.lazy && !this.loaded) return null;

            return this.image;
        },
    },
    mounted() {
        if (!process.client || !this.lazy) return;

        const observer = new IntersectionObserver(this.handleIntersect, {
            rootMargin: '500px 0px 500px 0px',
            threshold: [0, 0.05, 0.01],
        });

        observer.observe(this.$refs.image);
    },
    methods: {
        handleIntersect(entries, observer) {
            if (entries[0].intersectionRatio > 0) {
                this.loaded = true;
                observer.unobserve(this.$refs.image);
            }
        },
    },
};
</script>

<style lang="postcss" scoped>
.appImage {
    display: block;
    width: 100%;
    opacity: 0;
}
.loaded {
    opacity: 1;
}
</style>
