<template>
    <div
        :class="{'isLoaded': loaded, 'finishAnimation': lastLoad, isHome}"
        class="app"
    >
        <TheHeader
            :class="{'menuOpen': menuOpen}"
            :menu-open="menuOpen"
            @setFixed="val => headerFixed = val"
            @toggleMenu="menuOpen = !menuOpen"
        />
        <div
            :class="{'menuOpen': menuOpen}"
            class="wrapper"
        >
            <div
                :class="{ 'headerFixed': headerFixed || menuOpen }"
                class="headerPusher"
            ></div>
            <div class="inner">
                <main class="main">
                    <nuxt/>
                </main>
            </div>
            <TheFooter v-if="$route.path !== '/'"/>
        </div>

        <no-ssr>
            <AppDialogContent
                v-if="popupActive"
                @close="closePopup"
            >
                <h2>{{ options.popup.heading }}</h2>
                <div
                    class="content"
                    v-html="options.popup.content"
                >
                </div>
            </AppDialogContent>
        </no-ssr>
        <ExpandedMenu
            :open="menuOpen"
            @close="menuOpen = false"
        />
        <portal-target name="endOfPage"/>
    </div>
</template>

<script>
import TheFooter from '../components/layout/TheFooter.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import AppDialogContent from '../components/dialog/AppDialogContent.vue';
import ExpandedMenu from '../components/ExpandedMenu.vue';
import options from '../static/json/options.json';

export default {
    components: {
        TheFooter,
        TheHeader,
        AppDialogContent,
        ExpandedMenu,
    },
    data: () => ({
        headerFixed: false,
        menuOpen: false,
        popupActive: false,
        options,
        loaded: false,
        lastLoad: false,
    }),
    computed: {
        isHome() {
            return this.$route.path === '/';
        },
    },
    mounted() {
        if (process.client && this.isHome) {
            setTimeout(() => {
                this.loaded = true;
            }, 200);
            setTimeout(() => {
                this.lastLoad = true;
            }, 1500);
        }

        const thisDate = new Date();
        const thisDateYmd = `${thisDate.getFullYear()}${(thisDate.getMonth() + 1)}${thisDate.getDate()}`;

        if (!process.client
            || !this.options.popup.active
            || (this.options.popup.startDate > thisDateYmd && this.options.popup.startDate)
            || (this.options.popup.endDate < thisDateYmd && this.options.popup.endDate)
        ) return;

        if (this.isHome) {
            this.popupActive = true;
        }
    },
    methods: {
        closePopup() {
            this.popupActive = false;
        },
    },
};
</script>

<style lang="postcss" scoped>
.headerPusher {
    display: none;
    height: 120px;
    &.headerFixed {
        display: block;
    }
    @media (--laptop) {
        height: 90px;
    }
    @media (--tablet) {
        height: 74px;
    }
    @media (--mobile) {
        display: block;
        height: 58px;
    }
}
.isHome .headerPusher {
    display: none !important;
    @media (--mobile) {
        display: block !important;
    }
}
.wrapper {
    position: relative;
    z-index: 50;
    transition: transform 0.35s;
    background-color: #ffffff;
    overflow: hidden;
    @media (--largerDesktop) {
        overflow: visible;
        z-index: 61;
    }
    &.menuOpen {
        transform: translateX(-250px);
        box-shadow: -10px 0 20px 10px rgba(0, 0, 0, 0.3);
    }
}
.theHeader.menuOpen {
    transform: translateX(-250px);
}
.app__inner {
    position: relative;
    z-index: 49;
}
@media (--largerDesktop) {
    .isHome {
        overflow: hidden;
        & >>> .left {
            transform: translateX(-135%) skew(-7deg);
        }
        & >>> .backgroundImage,
        & >>> .girl,
        & >>> .theHeader {
            opacity: 0;
            transition: 0.5s var(--cubicBezier) 0.6s;
        }
        & >>> .theHeader {
            transition-delay: 0.8s;
        }
        & >>> .girl {
            transition-delay: 1s;
        }
        & >>> .left .top {
            opacity: 0;
            transition: 0.4s var(--cubicBezier) 0.4s;
        }
        & >>> .left .textHolder {
            opacity: 0;
            transform: translateY(150px);
            transition: 0.4s var(--cubicBezier) 0.7s;
        }
    }
    .isHome.isLoaded {
        & >>> .left {
            transform: translateX(-35%) skew(-7deg);
            transition: 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        }
        & >>> .backgroundImage,
        & >>> .girl,
        & >>> .theHeader {
            opacity: 1;
        }
    }
    .isHome.finishAnimation >>> .left {
        transform: translateX(0) skew(-7deg);
    }
    .isHome.finishAnimation >>> .left .top {
        opacity: 1;
    }
    .isHome.finishAnimation >>> .left .textHolder {
        opacity: 1;
        transform: translateY(0);
    }
    .isHome.finishAnimation >>> .theHeader {
        transition: 0s;
    }
}
</style>
