<template>
    <header
        :class="{'hasScrolled': hasScrolled}"
        class="theHeader bg-white"
    >
        <div class="flex inner">
            <div class="logoHolder flex flex-no-shrink">
                <Logo/>
            </div>
            <div class="navigationHolder flex flex-grow items-center justify-end">
                <TheNavigation/>
                <MenuButton
                    :open="menuOpen"
                    @toggle="$emit('toggleMenu')"
                />
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../ui/Logo.vue';
import TheNavigation from './TheNavigation.vue';
import MenuButton from '../ui/MenuButton.vue';

export default {
    components: {
        Logo,
        TheNavigation,
        MenuButton,
    },
    props: {
        menuOpen: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        hasScrolled: false,
    }),
    mounted() {
        if (!process.client) return;

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 100) {
                this.hasScrolled = true;
            } else {
                this.hasScrolled = false;
            }
        });
    },
};
</script>

<style lang="postcss" scoped>
.theHeader {
    transition: 0.35s;
    position: relative;
    z-index: 60;
    @media (--mobile) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    &.hasScrolled {
        @media (--mobile) {
            box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        }
    }
}
.logoHolder {
    width: 216px;
    height: 60px;
    @media (--laptop) {
        width: 150px;
        height: 42px;
    }
    @media (--tablet) {
        width: 122px;
        height: 34px;
    }
    @media (--mobile) {
        width: 100px;
        height: 28px;
    }
}
.inner {
    padding: 30px 50px;
    @media (--laptop) {
        padding: 24px 30px;
    }
    @media (--tablet) {
        padding: 20px 30px;
    }
    @media (--mobile) {
        padding: 15px;
    }
}
.theNavigation {
    @media (--tablet) {
        display: none;
    }
}
</style>
