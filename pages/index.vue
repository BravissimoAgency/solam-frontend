<template>
    <div class="frontpage relative">
        <div class="left">
            <div class="top">
                <div class="logoHolder">
                    <Logo white/>
                </div>
            </div>
            <div class="outer flex">
                <div class="inner">
                    <div class="textHolder">
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
            </div>
        </div>
        <div class="imageHolder relative">
            <AppImage
                :image="page.background_image.url"
                :alt="page.background_image.alt"
                :lazy="false"
                classes="backgroundImage ab100"
            />
            <AppImage
                :image="page.image.url"
                :alt="page.image.alt"
                :lazy="false"
                classes="girl"
                style="display: none;"
            />
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
    min-height: calc(100vh - 120px);
    @media (--largerDesktop) {
        height: calc(100vh - 120px);
    }
    @media (--laptop) {
        min-height: calc(100vh - 90px);
    }
    @media (--tablet) {
        min-height: calc(100vh - 74px);
    }
    @media (--smallTablet) {
        padding: 0;
        min-height: 0;
    }
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
    margin-bottom: -120px;
    overflow: hidden;
    @media (--smallDesktop) {
        top: 0;
        margin-bottom: 0;
        min-height: calc(100vh - 120px);
    }
    @media (--laptop) {
        width: 60%;
        min-height: calc(100vh - 90px);
    }
    @media (--tablet) {
        min-height: calc(100vh - 74px);
        width: 65%;
    }
    @media (--mediumTablet) {
        width: 70%;
    }
    @media (--smallTablet) {
        width: 100%;
        margin: auto;
        transform: none;
        max-width: 100%;
        min-height: 0;
        padding: 50px 50px 80px;
    }
    @media (--mobile) {
        padding: 30px 30px 60px;
    }
}
.top {
    padding: 31px 106px;
    transform: skew(7deg);
    @media (--smallDesktop) {
        display: none;
    }
}
.logoHolder {
    width: 216px;
    height: 60px;
}
.inner {
    color: #fff;
    padding: 50px 216px;
    padding-right: 200px;
    transform: skew(7deg);
    display: flex;
    max-width: 100%;
    align-items: center;
    min-height: calc(100vh - 140px);
    @media (--smallDesktop) {
        padding: 50px 160px;
    }
    @media (--laptop) {
        min-height: calc(100vh - 100px);
    }
    @media (--largeTablet) {
        padding-right: 50px;
    }
    @media (--tablet) {
        min-height: calc(100vh - 80px);
    }
    @media (--smallTablet) {
        transform: none;
        padding: 0;
        text-align: center;
        min-height: 0;
    }
}
.textHolder {
    width: 640px;
    max-width: 100%;
    margin: 0 auto;
}
.heading {
    margin-bottom: 36px;
    @media (--smallDesktop) {
        font-size: 60px;
    }
    @media (--laptop) {
        font-size: 42px;
        margin-bottom: 26px;
    }
    @media (--smallTablet) {
        font-size: 36px;
        margin-bottom: 20px;
    }
    @media (--mobile) {
        font-size: 26px;
    }
}
.preamble {
    margin-bottom: 40px;
    @media (--smallTablet) {
        margin-bottom: 30px;
    }
}
.imageHolder {
    width: 60%;
    height: calc(100% - 120px);
    position: absolute;
    top: 0;
    right: 0;
    line-height: 0;
    overflow: hidden;
    background-color: #fff;
    @media (--largerDesktop) {
        height: 100%;
        overflow: visible;
    }
    @media (--smallDesktop) {
        height: 100%;
    }
    @media (--smallTablet) {
        position: relative;
        overflow: visible;
        width: 100%;
        height: auto;
        margin-top: -30px;
    }
}
.frontpage >>> .backgroundImage {
    @media (--largerDesktop) {
        width: calc(100% + 25%);
        max-width: none;
        left: auto;
        right: 0;
    }
}
.frontpage >>> .girl {
    z-index: 2;
    position: absolute;
    left: 19px;
    bottom: 0;
    height: auto;
    width: 1000px;
    @media (max-height: 950px) {
        width: 900px;
        bottom: -50px;
        left: 40px;
    }
    @media (max-height: 800px) {
        width: 700px;
        bottom: -50px;
        left: 40px;
    }
    @media (--laptop) {
        width: 600px;
        left: 60px;
    }
    @media (--tablet) {
        width: 520px;
        left: 90px;
    }
    @media (--smallTablet) {
        position: relative;
        bottom: auto;
        left: auto;
        margin: 0 auto;
    }
    @media (--mobile) {
        right: -40px;
    }
}
</style>
