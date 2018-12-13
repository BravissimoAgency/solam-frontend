<template>
    <a
        class="block w-full h-full"
        href="/"
    >
        <img
            :src="white ? logoWhite : logoColor"
            class="block w-full h-full"
            alt=""
        >
    </a>
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
