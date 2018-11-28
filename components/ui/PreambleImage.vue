<template>
    <section class="preambleImage flex flex-wrap">
        <div class="left">
            <div class="halfContainer">
                <div
                    class="preamble"
                    v-html="preambleImage.preamble"
                ></div>
            </div>
        </div>
        <div
            v-if="preambleImage.image"
            class="right"
        >
            <AppImage
                :image="preambleImage.image.sizes.large"
                :alt="preambleImage.image.alt"
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
    margin-bottom: 80px;
    @media (--mediumTablet) {
        margin-bottom: 60px;
    }
    @media (--mobile) {
        margin-bottom: 40px;
    }
}
.left,
.right {
    width: 50%;
    @media (--mediumTablet) {
        width: 100%;
    }
}
.left {
    @media (--mediumTablet) {
        margin-bottom: 40px;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.right {
    padding-left: 94px;
    position: relative;
    line-height: 0;
    @media (--laptop) {
        padding-left: 40px;
    }
    @media (--mediumTablet) {
        padding-left: 0;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 57px;
        width: 65px;
        height: 100%;
        transform: skew(-7deg);
        background-color: #fff;
        @media (--laptop) {
            left: 15px;
        }
        @media (--mediumTablet) {
            display: none;
        }
    }
}
.halfContainer {
    width: 632px;
    margin-top: -5px;
    padding-left: 30px;
    padding-right: 62px;
    margin-left: auto;
    max-width: 100%;
    @media (--mediumTablet) {
        width: 100%;
        padding: 0 30px;
    }
    @media (--mobile) {
        padding: 0 15px;
    }
}
.preambleImage >>> .appImage {
    height: 462px;
    @media (--laptop) {
        height: 350px;
    }
    @media (--mediumTablet) {
        height: 300px;
    }
    @media (--mobile) {
        height: 220px;
    }
}
</style>
