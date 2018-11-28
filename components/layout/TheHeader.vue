<template>
    <header class="bg-white">
        <div class="flex inner">
            <div class="logoHolder flex flex-no-shrink">
                <Logo/>
            </div>
            <div class="navigationHolder flex flex-grow items-center justify-end">
                <TheNavigation/>
                <MenuButton/>
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
};
</script>

<style lang="postcss" scoped>
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
