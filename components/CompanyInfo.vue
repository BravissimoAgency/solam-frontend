<template>
    <section class="companyInfo flex flex-wrap">
        <div class="left">
            <div class="halfContainer">
                <div
                    class="preamble"
                    v-html="companyInfo.preamble"
                ></div>
            </div>
            <AppImage
                :image="companyInfo.image.sizes.large"
                :alt="companyInfo.image.alt"
            />
        </div>
        <div class="right">
            <div class="rightInner h-full w-full">
                <div
                    v-for="(row, index) in companyInfo.rows"
                    :key="index"
                    class="row"
                >
                    <img
                        :src="getIcon(row.icon)"
                        :class="row.icon"
                        class="icon"
                    >
                    <h4 class="heading">{{ row.title }}</h4>
                    <p class="text">{{ row.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import products from '../assets/images/icon-products.svg';
import applications from '../assets/images/icon-applications.svg';
import potatoes from '../assets/images/icon-potatoes.svg';
import earth from '../assets/images/icon-earth.svg';

export default {
    props: {
        companyInfo: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getIcon(icon) {
            const icons = {
                products,
                applications,
                potatoes,
                earth,
            };
            return icons[icon];
        },
    },
};
</script>

<style lang="postcss" scoped>
.companyInfo {
    margin-bottom: 90px;
    overflow: hidden;
}
.left {
    width: 57%;
    @media (--mediumTablet) {
        width: 100%;
        margin-bottom: 40px;
    }
}
.right {
    width: 43%;
    padding-left: 94px;
    position: relative;
    @media (--laptop) {
        padding-left: 40px;
    }
    @media (--mediumTablet) {
        width: 100%;
    }
}
.rightInner {
    background-color: #f2f6f8;
    position: relative;
    z-index: 2;
    padding: 125px 0;
    margin-left: -2px;
    @media (--laptop) {
        padding: 60px 20px;
        margin-left: 0;
    }
}
.right::before {
    content: "";
    background-color: #f2f6f8;
    transform: skew(-7deg);
    position: absolute;
    top: 0;
    left: -41px;
    height: 100%;
    width: 100%;
}
.halfContainer {
    width: 682px;
    margin-top: -5px;
    padding-left: 80px;
    padding-right: 62px;
    margin-left: auto;
    max-width: 100%;
    margin-right: 133px;
}
.preamble {
    margin-bottom: 80px;
}
.row {
    margin-bottom: 36px;
    max-width: 380px;
}
.icon {
    width: 68px;
    height: auto;
    margin-bottom: 22px;
}
.icon.products {
    width: 68px;
    height: 46px;
}
.icon.applications {
    width: 66px;
    height: 63px;
}
.icon.potatoes {
    width: 72px;
    height: 43px;
}
.icon.earth {
    width: 62px;
    height: 60px;
}
.heading {
    font-weight: 600;
    letter-spacing: 2.4px;
    font-size: 16px;
    color: var(--primaryColor);
    text-transform: uppercase;
    margin-bottom: 6px;
}
.companyInfo >>> .appImage {
    height: 423px;
}
</style>
