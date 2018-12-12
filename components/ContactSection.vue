<template>
    <section class="contactSection flex flex-wrap">
        <div class="left">
            <div class="halfContainer">
                <div
                    class="preamble"
                    v-html="options.contact_text"
                ></div>
                <Locations
                    :locations="options.locations"
                />
            </div>
        </div>
        <div
            class="right"
        >
            <no-ssr>
                <GoogleMap
                    :positions="positions"
                    :fit-bounds="true"
                />
            </no-ssr>
        </div>
    </section>
</template>

<script>
import GoogleMap from './GoogleMap.vue';
import Locations from './ui/Locations.vue';
import options from '../static/json/options.json';

export default {
    components: {
        Locations,
        GoogleMap,
    },
    data: () => ({
        options,
    }),
    computed: {
        positions() {
            return this.options.locations.map(location => location.position);
        },
    },
};
</script>

<style lang="postcss" scoped>
.contactSection {
    margin-bottom: 120px;
    @media (--laptop) {
        margin-bottom: 80px;
    }
    @media (--mobile) {
        margin-bottom: 40px;
    }
}
.left,
.right {
    width: 50%;
    @media (--mediumTablet) {
        width: 100%;
    }
}
.left {
    @media (--mediumTablet) {
        margin-bottom: 40px;
    }
}
.right {
    padding-left: 94px;
    position: relative;
    line-height: 0;
    height: 100%;
    @media (--laptop) {
        padding-left: 40px;
    }
    @media (--mediumTablet) {
        padding-left: 0;
        height: auto;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 57px;
        width: 65px;
        height: 100%;
        transform: skew(-7deg);
        background-color: #fff;
        @media (--laptop) {
            left: 15px;
        }
        @media (--mediumTablet) {
            display: none;
        }
    }
}
.halfContainer {
    width: 632px;
    margin-top: -5px;
    padding-right: 40px;
    margin-left: auto;
    max-width: 100%;
    padding-left: 30px;
    @media (--mediumTablet) {
        padding: 0 30px;
        width: 100%;
    }
    @media (--mobile) {
        padding: 0 25px;
    }
    @media (--smallMobile) {
        padding: 0 15px;
    }
}
.preamble {
    padding-right: 22px;
    margin-bottom: 77px;
    @media (--mediumTablet) {
        margin-bottom: 40px;
        padding-right: 0;
    }
}
.locations {
    @media (--mediumTablet) {
        max-width: 550px;
    }
}
</style>
