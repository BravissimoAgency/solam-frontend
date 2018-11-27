<template>
    <AppDialog @close="close">
        <div class="header">
            <h3 class="heading">{{ heading }}</h3>
            <button
                class="close"
                type="button"
                @click="close">
            </button>
        </div>
        <div class="body text-center">
            <slot></slot>
        </div>
    </AppDialog>
</template>

<script>
import AppDialog from './AppDialog.vue';

export default {
    components: {
        AppDialog,
    },
    props: {
        heading: {
            type: String,
            default: null,
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="postcss" scoped>
.header {
    background-color: var(--primaryColor);
    padding: 27px 30px;
    position: relative;
    @media (--mobile) {
        padding: 18px 20px;
    }
}
.heading {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    padding-right: 35px;
    margin-bottom: 0;
    @media (--mobile) {
        font-size: 12px;
        letter-spacing: 1.8px;
    }
}
.close {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    right: 30px;
    margin-top: -9px;
    background: url("../../assets/images/icon-close.svg") no-repeat center;
    background-size: 100%;
    @media (--mobile) {
        right: 20px;
    }
}
.body {
    padding: 50px;
    background-color: #ffffff;
    @media (--mobile) {
        padding: 30px 20px;
    }
}
.body >>> h2 {
    color: var(--primaryColor);
    margin-bottom: 30px;
}
</style>
