<template>
    <div class="app">
        <TheHeader/>
        <div class="inner">
            <main class="main">
                <nuxt/>
            </main>
        </div>
        <TheFooter v-if="$route.path !== '/'"/>

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

    </div>
</template>

<script>
import TheFooter from '../components/layout/TheFooter.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import AppDialogContent from '../components/dialog/AppDialogContent.vue';
import options from '../static/json/options.json';

export default {
    components: {
        TheFooter,
        TheHeader,
        AppDialogContent,
    },
    data: () => ({
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
</style>
