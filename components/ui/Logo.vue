<template>
    <nuxt-link
        class="block w-full h-full"
        to="/"
    >
        <img
            :src="white ? logoWhite : logoColor"
            class="block w-full h-full"
            alt=""
        >
    </nuxt-link>
</template>

<script>
import logoColor from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white.png';

export default {
    props: {
        white: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        logoColor,
        logoWhite,
    }),
};
</script>
