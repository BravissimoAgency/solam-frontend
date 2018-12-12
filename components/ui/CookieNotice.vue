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
                <AppDialogContent
                    v-if="termsOpen"
                    @close="termsOpen = false"
                >
                    <h2>Cookie Policy</h2>
                    <div class="content">
                        <p>
                            <b>Our policy on cookies</b><br>
                            <a href="https://www.solam.com">https://www.solam.com</a>
                            which is our public website,
                            like many other websites, can store or retrieve information
                            in your browser, usually in the form of cookies. This
                            information that may concern you, your interests, or your
                            internet device (computer, tablet, or mobile) is mainly
                            used to make the site work to your expectations, and to
                            give you a more personal experience of the web, as well
                            as to store your previous choices to memory.
                        </p>
                        <p>
                            <b>Cookies for performance</b><br>
                            These cookies will help us to find out how our visitors
                            use our website, so that we can judge how well it works
                            and what can be improved upon. For instance, by using
                            these cookies, we can find out which web pages are the
                            most and least popular. They measure the number of
                            visitors, how long they spend on our website and how
                            they found the website in the first place. We can
                            find out what we are doing well and what we can do
                            better, as well as ensure that the web pages are
                            loaded quicker and are correctly displayed. All
                            information collected by these cookies is anonymous
                            and not linked to any personal information about you.
                        </p>
                        <p>
                            <b>Disapprove cookies</b><br>
                            If our use of cookies presents problems for you, you
                            can take action to prevent them from being applied.
                            You can also change the settings in your browser to
                            block certain types of cookies. For more information
                            on how this works, you can look in the browser’s help
                            information section.
                        </p>
                    </div>
                </AppDialogContent>
            </portal>
        </div>
    </transition>
</template>

<script>
import AppDialogContent from '../dialog/AppDialogContent.vue';
import CloseAndOpenButton from './CloseAndOpenButton.vue';

export default {
    components: {
        AppDialogContent,
        CloseAndOpenButton,
    },
    data: () => ({
        active: window.localStorage.getItem('cookieInformationAccepted') === null,
        termsOpen: false,
    }),
    methods: {
        close() {
            window.localStorage.setItem('cookieInformationAccepted', true);
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
