<template>
    <div class="app">
        <div
            :class="{'menuOpen': menuOpen}"
            class="wrapper"
        >
            <TheHeader
                :menu-open="menuOpen"
                @toggleMenu="menuOpen = !menuOpen"
            />
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
.wrapper {
    position: relative;
    z-index: 50;
    transition: transform 0.35s;
    background-color: #ffffff;
    overflow: hidden;
    &.menuOpen {
        transform: translateX(-250px);
        box-shadow: -10px 0 20px 10px rgba(0, 0, 0, 0.3);
    }
}
.app__inner {
    position: relative;
    z-index: 49;
}
</style>
