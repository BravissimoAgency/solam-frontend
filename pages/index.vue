<template>
    <div class="frontpage relative">
        <div class="left">
            <div class="inner">
                <h1 class="heading">{{ page.heading }}</h1>
                <div
                    class="preamble"
                    v-html="page.preamble"
                ></div>
            </div>
        </div>
        <div class="imageHolder relative">
            <AppImage
                :image="page.background_image.sizes.large"
                :lazy="false"
                classes="ab100"
            />
            <div class="girl">
                <AppImage
                    :image="page.image.sizes.large"
                    :lazy="false"
                />
            </div>
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
        const res = await updatePage('home');
        if (res) {
            this.page = res;
        }
    },
};
</script>

<style lang="postcss" scoped>
.frontpage {
    overflow: hidden;
    background-color: var(--primaryColor);
}
.left {
    background-color: var(--primaryColor);
    transform: skew(-10deg);
    position: relative;
    z-index: 1;
    width: 53%;
    height: 100vh;
    margin-left: -120px;
}
.inner {
    color: #fff;
    padding: 100px;
    transform: skew(10deg);
}
.heading {
    margin-bottom: 40px;
}
.imageHolder {
    width: 60%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
}
.girl {
    line-height: 0;
    z-index: 2;
    position: absolute;
    bottom: 0;
}
</style>
