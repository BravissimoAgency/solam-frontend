<template>
    <section class="theFooter">
        <div class="inner flex">
            <div class="left">
                <div class="top">
                    <div
                        class="content"
                        v-html="options.contact_text"
                    ></div>
                    <Locations
                        :locations="options.locations"
                    />
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
    background-color: #F2F6F8;
}
.left,
.right {
    width: 50%;
}
.top {
    padding: 60px 100px;
}
.bottom {
    padding: 20px 100px;
    background-color: #E4EAEC;
    color: #8a969c;
    font-size: 13px;
}
.right {
    background-color: var(--primaryColor);
    position: relative;
}
.content {
    margin-bottom: 40px;
}
.theFooter >>> .footerImage {
    width: 749px;
    height: 608px;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
