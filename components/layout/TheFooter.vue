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
}
.left {
    width: 69%;
}
.right {
    width: 31%;
}
.top {
    padding: 70px 100px;
    padding-bottom: 65px;
}
.locations {
    padding-right: 56px;
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
}
.content {
    margin-bottom: 40px;
}
.theFooter >>> .footerImage {
    width: 749px;
    height: 608px;
    max-width: none;
    position: absolute;
    bottom: 0;
    right: 100px;
}
</style>
