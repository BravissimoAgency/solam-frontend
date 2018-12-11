<template>
    <div
        :class="{'isOpen': open}"
        class="accordion"
    >
        <div
            :class="{'logoShown': showLogo}"
            class="header"
            @click="toggle()"
        >
            <div
                v-if="showLogo"
                class="logoHolder"
            >
                <AppImage
                    :image="logo"
                    :use-webp="false"
                />
            </div>
            <span class="line"></span>
            <h3 class="title">{{ title }}</h3>
            <CloseAndOpenButton/>
        </div>
        <transition
            @enter="slideDown"
            @leave="slideUp"
        >
            <div
                v-show="open"
                class="body"
            >
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CloseAndOpenButton from './ui/CloseAndOpenButton.vue';
/* eslint-disable no-param-reassign */
import logo from '../assets/images/logo-grey.png';

export default {
    components: {
        CloseAndOpenButton,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        showLogo: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        open: false,
        transition: 350,
        logo,
    }),
    methods: {
        slideDown(el, done) {
            el.style.transition = `${this.transition}ms`;
            el.style.overflow = 'hidden';
            el.style.height = 0;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.height = `${el.firstChild.offsetHeight}px`;
                });
            });

            setTimeout(() => {
                el.style.height = '';
                done();
            }, this.transition);
        },
        slideUp(el, done) {
            el.style.height = `${el.firstChild.offsetHeight}px`;

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.height = 0;
                });
            });

            setTimeout(() => {
                done();
            }, this.transition);
        },
        toggle() {
            this.open = !this.open;
        },
    },
};
</script>

<style lang="postcss" scoped>
.accordion {
    margin-bottom: 30px;
    @media (--mobile) {
        margin-bottom: 20px;
    }
    &:last-child {
        margin-bottom: 0;
    }
}
.header {
    cursor: pointer;
    position: relative;
    padding-right: 170px;
    border-bottom: 8px solid #f2f6f8;
    padding-bottom: 30px;
    transition: 0.35s;
    display: flex;
    align-items: center;
    @media (--laptop) {
        border-bottom: 6px solid #f2f6f8;
    }
    @media (--tablet) {
        padding-bottom: 20px;
    }
    @media (--mediumTablet) {
        padding-right: 50px;
    }
    @media (--mobile) {
        border-bottom: 4px solid #f2f6f8;
        padding-bottom: 15px;
    }
}
.logoHolder {
    width: 126px;
    line-height: 0;
    margin-top: 12px;
    margin-left: 6px;
    margin-right: 26px;
    @media (--tablet) {
        width: 100px;
    }
    @media (--mobile) {
        display: none;
    }
}
.line {
    width: 3px;
    height: 25px;
    background-color: var(--secondaryColor);
    display: inline-block;
    transform: skew(-9deg);
    margin-left: 2px;
    @media (--mobile) {
        display: none;
    }
}
.title {
    font-weight: normal;
    color: var(--primaryColor);
    margin: 0;
    padding-left: 30px;
    @media (--mobile) {
        padding-left: 0;
    }
}
.logoShown .title {
    letter-spacing: 5.2px;
    text-transform: uppercase;
}
.content {
    padding-top: 30px;
}
.accordion >>> {
    & .closeAndOpenButton {
        position: absolute;
        width: auto;
        right: 0;
        top: 3px;
        @media (--mobile) {
            top: 0;
        }
    }
}
.accordion.isOpen >>> {
    & .buttonIcon {
        transform: rotate(45deg);
    }
    & .buttonText--close {
        opacity: 1;
    }
    & .buttonText--open {
        opacity: 0;
    }
}
</style>
