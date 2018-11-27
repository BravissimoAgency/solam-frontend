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
.right {
    padding-left: 94px;
    position: relative;
    line-height: 0;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 57px;
        width: 65px;
        height: 100%;
        transform: skew(-7deg);
        background-color: #fff;
    }
}
.halfContainer {
    width: 602px;
    margin-top: -5px;
    padding-right: 62px;
    margin-left: auto;
    max-width: 100%;
}
.preambleImage >>> .appImage {
    height: 462px;
}
</style>
