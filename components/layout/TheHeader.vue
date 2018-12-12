<template>
    <header
        :class="{'hasScrolled': hasScrolled, 'headerFixed': scrollingUp || menuOpen, isHome}"
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
        scrollingUp: false,
        lastScroll: 0,
    }),
    computed: {
        isHome() {
            return this.$route.name === 'index';
        },
    },
    mounted() {
        if (!process.client) return;

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 100) {
                this.hasScrolled = true;
            } else {
                this.hasScrolled = false;
            }

            if (this.lastScroll > scrollTop && !this.isHome) {
                this.scrollingUp = true;
                this.$emit('setFixed', true);
            } else {
                this.scrollingUp = false;
                this.$emit('setFixed', false);
            }

            this.lastScroll = scrollTop;
        });
    },
};
</script>

<style lang="postcss" scoped>
.theHeader {
    position: relative;
    z-index: 100;
    @media (--mobile) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: 0.35s;
    }
    &.hasScrolled {
        @media (--mobile) {
            box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        }
    }
}
@media (min-width: 601px) {
    .isHome {
        z-index: 60;
        position: relative;
        box-shadow: none;
    }
    .headerFixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
        animation: animateIn 0.35s;
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
@keyframes animateIn {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
