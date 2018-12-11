<template>
    <div class="app">
        <TheHeader
            :class="{'menuOpen': menuOpen}"
            :menu-open="menuOpen"
            @toggleMenu="menuOpen = !menuOpen"
        />
        <div
            :class="{'menuOpen': menuOpen}"
            class="wrapper"
        >
            <div class="headerPusher"></div>
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
        menuOpen: false,
        popupActive: false,
        options,
    }),
    mounted() {
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
</style>
