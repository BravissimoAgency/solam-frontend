<template>
    <header class="bg-white">
        <div class="flex inner">
            <div class="logoHolder flex flex-no-shrink">
                <Logo/>
            </div>
            <div class="navigationHolder flex flex-grow items-center justify-end">
                <TheNavigation/>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../ui/Logo.vue';
import TheNavigation from './TheNavigation.vue';

export default {
    components: {
        Logo,
        TheNavigation,
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
}
.inner {
    padding: 30px 50px;
    @media (--laptop) {
        padding: 24px 30px;
    }
}
</style>
