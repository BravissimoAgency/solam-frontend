<template>
    <div class="frontpage relative">
        <div class="left">
            <div class="top">
                <div class="logoHolder">
                    <Logo white/>
                </div>
            </div>
            <div class="inner">
                <h1 class="heading">{{ page.heading }}</h1>
                <div
                    class="preamble"
                    v-html="page.preamble"
                ></div>
                <AppButton
                    :url="page.button.url"
                    :target="page.button.target"
                    label="Read more"
                />
            </div>
        </div>
        <div class="imageHolder relative">
            <AppImage
                :image="page.background_image.sizes.large"
                :alt="page.background_image.alt"
                :lazy="false"
                classes="ab100"
            />
            <div class="girl">
                <AppImage
                    :image="page.image.sizes.large"
                    :alt="page.image.alt"
                    :lazy="false"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from '../components/ui/AppButton.vue';
import Logo from '../components/ui/Logo.vue';
import page from '../static/json/-_-.json';
import { getMeta, updatePage } from '../utils/helpers';

export default {
    components: {
        AppButton,
        Logo,
    },
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
    background-color: var(--primaryColor);
    height: calc(100vh - 120px);
}
.left {
    top: -120px;
    background-color: var(--primaryColor);
    transform: skew(-7deg);
    position: relative;
    z-index: 1;
    width: 55%;
    min-height: 100vh;
    margin-left: -120px;
    overflow: hidden;
}
.top {
    padding: 31px 79px;
    transform: skew(7deg);
}
.logoHolder {
    width: 216px;
    height: 60px;
}
.inner {
    color: #fff;
    padding: 179px 216px;
    padding-right: 200px;
    transform: skew(7deg);
}
.heading {
    margin-bottom: 36px;
}
.preamble {
    margin-bottom: 40px;
}
.imageHolder {
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 0;
    overflow: hidden;
}
.girl {
    line-height: 0;
    z-index: 2;
    position: absolute;
    left: 19px;
    bottom: 0;
    width: 1102px;
    height: 894px;
}
</style>
