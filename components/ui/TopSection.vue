<template>
    <section class="topSection relative">
        <AppImage
            :image="topSection.background_image.url"
            :alt="topSection.background_image.alt"
            :lazy="false"
            classes="ab100"
        />
        <div class="overlay ab100"></div>
        <div class="container flex items-end h-full relative">
            <h1 class="heading">{{ topSection.heading }}</h1>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        topSection: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>
.topSection {
    padding: 75px 0;
    margin-bottom: 84px;
    height: 508px;
    color: #fff;
    @media (--laptop) {
        height: 350px;
        padding: 40px 0;
    }
    @media (--tablet) {
        height: 280px;
        padding: 30px 0;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    @media (--mediumTablet) {
        margin-bottom: 70px;
    }
    @media (--mobile) {
        height: 180px;
        padding: 15px 0;
        margin-bottom: 50px;
    }
}
.container {
    @media (--tablet) {
        align-items: center;
        justify-content: center;
    }
}
.overlay {
    background-color: var(--primaryColor);
    opacity: 0.8;
}
.heading {
    margin-left: -6px;
    position: relative;
    @media (--laptop) {
        margin-left: 56px;
    }
    @media (--tablet) {
        margin-left: 0;
    }
    @media (--mobile) {
        margin-left: 0;
    }
    @media (--smallMobile) {
        font-size: 30px;
    }
    &::before {
        content: "";
        position: absolute;
        top: 16px;
        left: -88px;
        width: 28px;
        height: 286px;
        transform: skew(-9deg);
        background-color: var(--secondaryColor);
        @media (--laptop) {
            left: -46px;
            width: 18px;
            height: 140px;
            transform: skew(-8deg);
        }
        @media (--tablet) {
            height: 200px;
            top: 14px;
            width: 16px;
        }
        @media (--mediumTablet) {
            top: 12px;
            width: 15px;
        }
        @media (--mobile) {
            display: block;
            left: -32px;
            top: 9px;
            width: 12px;
            height: 130px;
        }
        @media (--smallMobile) {
            width: 8px;
            left: -24px;
            top: 8px;
        }
    }
}
</style>
