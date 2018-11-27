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
    margin-bottom: 74px;
    overflow: hidden;
}
.left,
.right {
    width: 50%;
}
.right {
    padding-left: 94px;
    position: relative;
}
.rightInner {
    background-color: #f2f6f8;
    position: relative;
    z-index: 2;
    padding: 100px;
}
.right::before {
    content: '';
    background-color: #f2f6f8;
    transform: skew(-10deg);
    position: absolute;
    top: 0;
    left: -18px;
    height: 100%;
    width: 100%;
}
.halfContainer {
    width: 602px;
    margin-top: -5px;
    padding-right: 62px;
    margin-left: auto;
    max-width: 100%;
}
.preamble {
    margin-bottom: 80px;
}
.row {
    margin-bottom: 40px;
}
.icon {
    width: 72px;
    height: auto;
    margin-bottom: 15px;
}
.heading {
    font-weight: 600;
    letter-spacing: 2.4px;
    font-size: 16px;
    color: var(--primaryColor);
    text-transform: uppercase;
    margin-bottom: 6px;
}
</style>
