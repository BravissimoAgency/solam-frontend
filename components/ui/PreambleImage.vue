<template>
    <section class="preambleImage flex">
        <div class="left">
            <div class="halfContainer">
                <div
                    class="preamble"
                    v-html="preambleImage.preamble"
                ></div>
            </div>
        </div>
        <div class="right">
            <AppImage
                :image="preambleImage.image.sizes.large"
            />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        preambleImage: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>
.preambleImage {
    margin-bottom: 60px;
}
.left,
.right {
    width: 50%;
}
.halfContainer {
    width: 660px;
    margin: 0 auto;
}
</style>
