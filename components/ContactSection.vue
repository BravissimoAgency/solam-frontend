<template>
    <section class="contactSection flex">
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
}
.left,
.right {
    width: 50%;
}
.right {
    padding-left: 94px;
    position: relative;
    line-height: 0;
    @media (--laptop) {
        padding-left: 40px;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 15px;
        width: 65px;
        height: 100%;
        transform: skew(-7deg);
        background-color: #fff;
    }
}
.halfContainer {
    width: 602px;
    margin-top: -5px;
    padding-right: 40px;
    margin-left: auto;
    max-width: 100%;
}
.preamble {
    padding-right: 22px;
    margin-bottom: 77px;
}
</style>
