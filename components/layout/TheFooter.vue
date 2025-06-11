<template>
    <section class="theFooter">
        <div class="inner flex">
            <div class="left">
                <div class="top">
                    <div class="container">
                        <div
                            class="content"
                            v-html="options.contact_text"
                        ></div>
                        <Locations
                            :locations="options.locations"
                        />
                    </div>
                </div>
                <TheFooterBottom/>
            </div>
            <div class="right">
                <AppImage
                    :image="options.footer_image.sizes.large"
                    :alt="options.footer_image.alt"
                    classes="footerImage"
                    style="display: none;"
                />
            </div>
        </div>
        <TheFooterBottom/>
    </section>
</template>

<script>
import Locations from '../ui/Locations.vue';
import TheFooterBottom from './TheFooterBottom.vue';
import options from '../../static/json/options.json';

export default {
    components: {
        Locations,
        TheFooterBottom,
    },
    data: () => ({
        options,
    }),
};
</script>

<style lang="postcss" scoped>
.theFooter {
    margin-top: 240px;
    background-color: #f2f6f8;
    @media (--laptop) {
        margin-top: 150px;
    }
    @media (--largeTablet) {
        margin-top: 180px;
    }
    @media (--tablet) {
        margin-top: 60px;
    }
    @media (--mobile) {
        margin-top: 40px;
        text-align: center;
    }
}
.theFooter >>> .location .icon {
    @media (--mobile) {
        display: none;
    }
}
.theFooter >>> .location .text {
    @media (--mobile) {
        width: 100%;
        padding-left: 0;
    }
}
.theFooter .bottom {
    display: none;
    @media (--tablet) {
        display: flex;
    }
}
.inner {
    @media (--tablet) {
        flex-wrap: wrap;
    }
}
.left {
    width: 69%;
    @media (--smallDesktop) {
        width: 60%;
    }
    @media (--largeTablet) {
        width: 65%;
    }
    @media (--tablet) {
        width: 100%;
        padding-right: 0;
    }
    & .bottom {
        display: flex;
        @media (--tablet) {
            display: none;
        }
    }
}
.right {
    width: 31%;
    @media (--smallDesktop) {
        width: 40%;
    }
    @media (--largeTablet) {
        width: 35%;
    }
    @media (--tablet) {
        width: 100%;
    }
}
.top {
    padding: 55px 100px;
    @media (--smallDesktop) {
        padding: 50px;
    }
    @media (--laptop) {
        padding: 40px 30px;
    }
    @media (--mobile) {
        padding: 30px 25px;
    }
    @media (--smallMobile) {
        padding: 30px 15px;
    }
}
.locations {
    padding-right: 56px;
    @media (--largeTablet) {
        padding-right: 30px;
    }
    @media (--mobile) {
        padding-right: 0;
    }
}
.locations >>> .location {
    min-width: 290px;
    @media (--tablet) {
        min-width: 0;
    }
}
.container {
    padding: 0;
    width: 670px;
    margin: 0;
}
.right {
    background-color: var(--primaryColor);
    position: relative;
    @media (--tablet) {
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
    }
    @media (--mobile) {
        justify-content: flex-start;
    }
}
.right::before {
    content: "";
    position: absolute;
    top: 0;
    left: -39px;
    transform: skew(-7deg);
    width: 100%;
    height: 100%;
    background-color: var(--primaryColor);
    @media (--tablet) {
        left: 0;
        top: auto;
        bottom: 0;
        height: calc(100% - 64px);
        transform: skew(0deg);
    }
    @media (--mobile) {
        height: calc(100% - 46px);
    }
}
.content {
    margin-bottom: 40px;
    @media (--tablet) {
        padding-right: 60px;
    }
    @media (--smallTablet) {
        padding-right: 0;
    }
    @media (--mobile) {
        margin-bottom: 20px;
    }
}
.theFooter >>> .footerImage {
    width: 1120px;
    max-width: none;
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 0;
    @media (--laptop) {
        width: 1010px;
        right: -100px;
    }
    @media (--largeTablet) {
        width: 1125px;
        right: -360px;
    }
    @media (--tablet) {
        display: block;
        width: 700px;
        position: relative;
        right: 0;
        bottom: auto;
    }
    @media (--mobile) {
        width: 500px;
        right: 60px;
    }
}
</style>
