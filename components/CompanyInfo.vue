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
                    <div class="iconHolder">
                        <img
                            :src="getIcon(row.icon)"
                            :class="row.icon"
                            class="icon"
                        >
                    </div>
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
    @media (--mediumTablet) {
        margin-bottom: 60px;
    }
    @media (--mobile) {
        margin-bottom: 40px;
    }
}
.left {
    width: 57%;
    @media (--mediumTablet) {
        width: 100%;
        margin-bottom: 0;
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
        padding-left: 0;
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
    @media (--mediumTablet) {
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
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
    @media (--mediumTablet) {
        display: none;
    }
}
.halfContainer {
    width: 682px;
    margin-top: -5px;
    padding-left: 80px;
    padding-right: 62px;
    margin-left: auto;
    max-width: 100%;
    margin-right: 133px;
    @media (--largeTablet) {
        margin: 0;
        padding-left: 30px;
        padding-right: 80px;
    }
    @media (--mediumTablet) {
        padding: 0 30px;
        width: 100%;
    }
    @media (--mobile) {
        padding: 0 15px;
    }
}
.preamble {
    margin-bottom: 80px;
    @media (--mediumTablet) {
        margin-bottom: 40px;
    }
}
.row {
    margin-bottom: 36px;
    max-width: 380px;
    &:last-child {
        margin-bottom: 0;
    }
    @media (--mediumTablet) {
        width: 50%;
        padding: 15px;
        margin-bottom: 15px;
    }
    @media (--mobile) {
        width: 100%;
        margin-bottom: 0;
    }
}
.iconHolder {
    line-height: 0;
    margin-bottom: 22px;
    @media (--mediumTablet) {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (--mobile) {
        height: auto;
        margin-bottom: 22px;
    }
}
.icon {
    width: 68px;
    height: auto;
}
.icon.products {
    width: 68px;
    height: 46px;
    @media (--mobile) {
        width: calc(68px * 0.75);
        height: calc(46px * 0.75);
    }
}
.icon.applications {
    width: 66px;
    height: 63px;
    @media (--mobile) {
        width: calc(66px * 0.75);
        height: calc(63px * 0.75);
    }
}
.icon.potatoes {
    width: 72px;
    height: 43px;
    @media (--mobile) {
        width: calc(72px * 0.75);
        height: calc(43px * 0.75);
    }
}
.icon.earth {
    width: 62px;
    height: 60px;
    @media (--mobile) {
        width: calc(62px * 0.75);
        height: calc(60px * 0.75);
    }
}
.heading {
    font-weight: 600;
    letter-spacing: 2.4px;
    font-size: 16px;
    color: var(--primaryColor);
    text-transform: uppercase;
    margin-bottom: 6px;
    @media (--mobile) {
        font-size: 15px;
    }
}
.companyInfo >>> .appImage {
    height: 423px;
    @media (--laptop) {
        height: 350px;
    }
    @media (--mediumTablet) {
        height: 300px;
    }
    @media (--mobile) {
        height: 220px;
    }
}
</style>
