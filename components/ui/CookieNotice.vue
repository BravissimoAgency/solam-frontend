<template>
    <transition
        name="cookeNotice"
        appear
    >
        <div
            v-if="active"
            class="cookieNotice flex justify-between items-center"
        >
            <p class="inner">
                We use cookies to give you the best experience of our site.<br>
                By continuing to use the site you agree to this.
                <button
                    class="readMore"
                    @click="termsOpen = true"
                >
                    Read more
                </button>
            </p>
            <CloseAndOpenButton
                @click="close()"
            />
            <portal to="endOfPage">
                <AppDialog
                    v-if="termsOpen"
                    :aria-hidden="termsOpen ? 'false' : 'true'"
                    :content="termsText.content"
                    :heading="termsText.heading"
                    dialog-id="cookieinformation"
                    @close="termsOpen = false"
                />
            </portal>
        </div>
    </transition>
</template>

<script>
import AppDialog from '../dialog/AppDialog.vue';
import CloseAndOpenButton from './CloseAndOpenButton.vue';

export default {
    components: {
        AppDialog,
        CloseAndOpenButton,
    },
    data() {
        return {
            active: window.localStorage.getItem('cookieInformationAccepted') === null,
            termsOpen: false,
        };
    },
    computed: {
        termsText() {
            return '<p>Blablabla</p>';
        },
    },
    methods: {
        close() {
            //  window.localStorage.setItem('cookieInformationAccepted', true);
            this.active = false;
        },
    },
};
</script>

<style lang="postcss" scoped>
.cookeNotice-enter-active,
.cookeNotice-leave-active {
    opacity: 0;
}
.cookieNotice {
    position: fixed;
    left: 50%;
    bottom: 50px;
    margin-left: -378px;
    width: 756px;
    z-index: 99;
    padding: 42px 50px;
    background-color: #fff;
    transition: 0.35s;
    box-shadow: 0 0 68px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
}
.inner {
    margin-bottom: 0;
    text-align: left;
    font-size: 16px;
}
.readMore {
    font-weight: 700;
    position: relative;
    padding-bottom: 4px;
    color: var(--primaryColor);
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--secondaryColor);
        transition: 0.25s;
    }
    &:hover::after {
        background-color: var(--primaryColor);
    }
}
.cookieNotice >>> {
    & .buttonIcon {
        transform: rotate(45deg);
    }
    & .buttonTextHolder {
        width: 85px;
    }
    & .buttonText--close {
        opacity: 1;
    }
    & .buttonText--open {
        display: none;
    }
}
</style>
