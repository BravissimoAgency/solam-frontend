<template>
    <div class="page relative">
        <div class="inner">
            <h1>{{ page.heading }}</h1>
            <div
                class="preamble"
                v-html="page.preamble"
            ></div>
        </div>
        <div class="imageHolder relative">
            <AppImage
                :image="page.background_image.sizes.large"
                classes="ab100"
            />
            <div class="girl">
                <AppImage
                    :image="page.image.sizes.large"
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
.inner {
    width: 53%;
    height: 100vh;
    background-color: var(--primaryColor);
    color: #fff;
    padding: 100px;
    position: relative;
    z-index: 1;
}
.imageHolder {
    width: 53%;
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
