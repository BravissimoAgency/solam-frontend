<template>
    <transition name="dialog">
        <div class="dialog">
            <div class="wrapper">
                <div class="outer">
                    <div class="holder">
                        <div class="inner">
                            <div
                                v-click-outside="close"
                                class="overflow-hidden mb-8"
                            >
                                <slot/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    created() {
        document.body.classList.add('overflow-hidden');
        document.addEventListener('keydown', this.keyListener);
    },
    beforeDestroy() {
        document.addEventListener('keydown', this.keyListener);
        document.body.classList.remove('overflow-hidden');
    },
    methods: {
        keyListener(event) {
            if (event.keyCode === 27) {
                this.close();
            }
        },
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="postcss" scoped>
.dialog-enter-active,
.dialog-leave-active {
    transition: opacity 0.35s;
}
.dialog-enter,
.dialog-leave-to {
    opacity: 0;
}
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    overflow: auto;
    padding: 0 15px;
    -webkit-overflow-scrolling: touch;
}
.wrapper {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 30px 0;
}
.outer {
    margin: auto;
    display: flex;
    width: 100%;
    max-height: 100%;
}
.holder {
    width: 720px;
    margin: 0 auto;
    max-width: 100%;
}
.inner {
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 30px;
}
</style>
