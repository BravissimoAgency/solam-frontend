<template>
    <AppDialog @close="close">
        <div class="header">
            <div class="logoHolder">
                <Logo/>
            </div>
            <button
                type="button"
                class="close"
                @click="close"
            >
                <span class="buttonInner flex items-center">
                    <span class="buttonTextHolder">
                        <span class="buttonText">Close</span>
                    </span>
                    <span class="buttonIcon"></span>
                </span>
            </button>
        </div>
        <div class="body text-center">
            <div class="container">
                <slot></slot>
            </div>
        </div>
    </AppDialog>
</template>

<script>
import AppDialog from './AppDialog.vue';
import Logo from '../ui/Logo.vue';

export default {
    components: {
        AppDialog,
        Logo,
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="postcss" scoped>
:root {
    --buttonSize: 40px;
    --buttonSizeSmaller: 32px;
}

.header {
    padding: 50px;
    position: relative;
    background-color: #ffffff;
    @media (--smallTablet) {
        padding: 30px;
    }
    @media (--mobile) {
        padding: 15px;
    }
}
.container {
    width: 680px;
}
.logoHolder {
    width: 216px;
    height: 60px;
    @media (--smallTablet) {
        width: 150px;
        height: 42px;
    }
    @media (--mobile) {
        width: 110px;
        height: auto;
    }
}
.close {
    position: absolute;
    top: 50px;
    right: 50px;
    @media (--smallTablet) {
        top: 30px;
        right: 30px;
    }
    @media (--mobile) {
        top: 15px;
        right: 15px;
    }
}
.body {
    padding: 60px 0 120px 0;
    background-color: #ffffff;
    @media (--smallTablet) {
        padding: 30px 0 45px 0;
    }
    @media (--mobile) {
        padding: 15px 0 30px 0;
    }
}
.body >>> h2 {
    color: var(--primaryColor);
    margin-bottom: 30px;
    @media (--mobile) {
        margin-bottom: 20px;
    }
}

.buttonTextHolder {
    position: relative;
    width: 160px;
    height: 24px;
    @media (--mobile) {
        display: none;
    }
}
.buttonText {
    position: absolute;
    right: 20px;
    top: 1px;
    transition: 0.35s;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.4px;
    color: var(--primaryColor);
    text-transform: uppercase;
}
.buttonIcon {
    display: block;
    position: relative;
    width: var(--buttonSize);
    height: var(--buttonSize);
    border: 2px solid var(--primaryColor);
    border-radius: 100%;
    transition: 0.35s;
    transform: rotate(45deg);
    @media (--mobile) {
        width: var(--buttonSizeSmaller);
        height: var(--buttonSizeSmaller);
    }
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 18px;
        height: 2px;
        left: 50%;
        top: 50%;
        background-color: var(--primaryColor);
        margin: -1px 0 0 -9px;
        @media (--mobile) {
            margin: -1px 0 0 -7px;
            width: 14px;
        }
    }
    &::after {
        transform: rotate(90deg);
    }
}
</style>
