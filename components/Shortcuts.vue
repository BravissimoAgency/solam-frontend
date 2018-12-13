<template>
    <section class="shortcuts flex flex-wrap">
        <div
            v-for="shortcut in shortcuts"
            :key="shortcut.id"
            class="shortcut flex items-center relative text-center"
        >
            <AppImage
                :image="shortcut.image.sizes.large"
                :alt="shortcut.image.alt"
                classes="ab100"
            />
            <div class="overlay ab100"></div>
            <div class="inner w-full">
                <h2 class="heading">{{ shortcut.post_title }}</h2>
                <AppButton
                    :url="shortcut.button.url"
                    :target="shortcut.button.target"
                    label="Read more"
                />
            </div>
        </div>
    </section>
</template>

<script>
import AppButton from './ui/AppButton.vue';
import shortcutsJson from '../static/json/shortcuts.json';

export default {
    components: {
        AppButton,
    },
    props: {
        ids: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        shortcutsJson,
    }),
    computed: {
        shortcuts() {
            return this.ids.map(id => this.shortcutsJson.find(shortcut => shortcut.id === id));
        },
    },
};
</script>

<style lang="postcss" scoped>
.shortcuts {
    padding: 0 100px;
    margin-bottom: 80px;
    @media (--laptop) {
        padding: 0 30px;
    }
    @media (--mediumTablet) {
        margin-bottom: 60px;
    }
    @media (--mobile) {
        padding: 0 25px;
        margin-bottom: 40px;
    }
    @media (--smallMobile) {
        padding: 0 15px;
    }
}
.shortcut {
    width: 50%;
    padding: 74px 30px;
    padding-bottom: 93px;
    @media (--mediumTablet) {
        padding: 60px 15px;
    }
    @media (--mobile) {
        width: 100%;
    }
}
.inner {
    position: relative;
    z-index: 1;
}
.overlay {
    background-color: var(--primaryColor);
    opacity: 0.8;
}
.heading {
    color: #fff;
    margin-bottom: 41px;
    @media (--mediumTablet) {
        margin-bottom: 30px;
    }
}
</style>
