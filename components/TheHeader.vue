<template>
    <header class="bg-white">
        <div class="container">
            <div class="flex inner">
                <div class="logoHolder flex flex-no-shrink">
                    <Logo/>
                </div>
                <div class="navigationHolder flex flex-grow items-center justify-end">
                    <TheNavigation/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue';
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
}
.inner {
    padding: 30px 0;
}
</style>
