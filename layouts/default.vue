<template>
    <div
        :class="{'isLoaded': loaded, 'finishAnimation': lastLoad, 'isHome': $route.path === '/'}"
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
            <CookieNotice/>
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
import CookieNotice from '../components/ui/CookieNotice.vue';
import options from '../static/json/options.json';

export default {
    components: {
        TheFooter,
        TheHeader,
        AppDialogContent,
        ExpandedMenu,
        CookieNotice,
    },
    data: () => ({
        headerFixed: false,
        menuOpen: false,
        popupActive: false,
        options,
        loaded: false,
        lastLoad: false,
    }),
    mounted() {
        if (process.client) {
            setTimeout(() => {
                this.loaded = true;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.lastLoad = true;
                    }, 1300);
                });
            }, 200);
        }
        if (!process.client || !this.options.popup.active) return;

        if (window.localStorage.getItem(`popup__${this.options.popup.id}`) === null) {
            this.popupActive = true;
        }
    },
    methods: {
        closePopup() {
            window.localStorage.setItem(`popup__${this.options.popup.id}`, true);
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
            transform: translateX(-100%) skew(-7deg);
            transition: 0.8s var(--cubicBezier);
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
    }
    .isHome.isLoaded {
        & >>> .left {
            transform: translateX(-25%) skew(-7deg);
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
    .isHome.finishAnimation >>> .theHeader {
        transition: 0s;
    }
}
</style>
