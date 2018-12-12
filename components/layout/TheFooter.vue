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
                <div class="bottom">
                    Website produced by
                    <a
                        href="https://www.bravissimo.se/"
                        target="_blank"
                    >
                        Bravissimo
                    </a>
                </div>
            </div>
            <div class="right">
                <AppImage
                    :image="options.footer_image.sizes.large"
                    :alt="options.footer_image.alt"
                    classes="footerImage"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Locations from '../ui/Locations.vue';
import options from '../../static/json/options.json';

export default {
    components: {
        Locations,
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
        margin-top: 120px;
    }
    @media (--mediumTablet) {
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
.left {
    width: 69%;
    @media (--smallDesktop) {
        width: 60%;
    }
    @media (--largeTablet) {
        width: 65%;
    }
    @media (--tablet) {
        width: 72%;
        padding-right: 60px;
    }
    @media (--smallTablet) {
        width: 100%;
        padding-right: 0;
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
        width: 28%;
    }
    @media (--smallTablet) {
        display: none;
    }
}
.top {
    padding: 70px 100px;
    padding-bottom: 65px;
    @media (--smallDesktop) {
        padding: 60px 50px;
    }
    @media (--laptop) {
        padding: 40px 30px;
    }
    @media (--mobile) {
        padding: 30px 15px;
    }
}
.locations {
    padding-right: 56px;
    @media (--mobile) {
        padding-right: 0;
    }
}
.container {
    padding: 0;
    width: 670px;
    margin: 0;
}
.bottom {
    padding: 23px 100px;
    background-color: #e4eaec;
    color: #8a969c;
    font-size: 13px;
    @media (--smallDesktop) {
        padding: 20px 50px;
    }
    @media (--laptop) {
        padding: 15px 30px;
    }
    @media (--smallTablet) {
        text-align: center;
    }
}
.right {
    background-color: var(--primaryColor);
    position: relative;
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
    @media (--mediumTablet) {
        left: -50px;
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
    width: 1110px;
    max-width: none;
    position: absolute;
    bottom: 0;
    right: 0;
    @media (--laptop) {
        width: 950px;
        right: -100px;
    }
    @media (--largeTablet) {
        width: 1010px;
        right: -280px;
    }
    @media (--tablet) {
        display: none;
    }
}
</style>
