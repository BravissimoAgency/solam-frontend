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
            <button
                type="button"
                class="button"
            >
                <span class="buttonInner">
                    <span class="buttonTextHolder">
                        <span class="buttonText buttonText--open">Read more</span>
                        <span class="buttonText buttonText--close">Close</span>
                    </span>
                    <span class="buttonIcon"></span>
                </span>
            </button>
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
/* eslint-disable no-param-reassign */
import logo from '../assets/images/logo-grey.png';

export default {
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
:root {
    --buttonSize: 40px;
}
.accordion {
    margin-bottom: 30px;
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
    @media (--mobile) {
        border-bottom: 4px solid #f2f6f8;
    }
}
.logoHolder {
    width: 126px;
    line-height: 0;
    margin-top: 12px;
    margin-left: 6px;
    margin-right: 26px;
}
.line {
    width: 3px;
    height: 25px;
    background-color: var(--secondaryColor);
    display: inline-block;
    transform: skew(-9deg);
    margin-left: 2px;
}
.title {
    font-weight: normal;
    color: var(--primaryColor);
    margin: 0;
    padding-left: 30px;
}
.logoShown .title {
    letter-spacing: 5.2px;
    text-transform: uppercase;
}
.button {
    position: absolute;
    width: auto;
    right: 0;
    top: 3px;
}
.buttonInner {
    display: flex;
    align-items: center;
}
.buttonTextHolder {
    position: relative;
    width: 150px;
    height: 24px;
    @media (--mobile) {
        display: none;
    }
}
.buttonText {
    position: absolute;
    right: 20px;
    top: 4px;
    transition: 0.35s;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2.4px;
    color: var(--primaryColor);
    text-transform: uppercase;
}
.buttonText--close {
    opacity: 0;
}
.buttonIcon {
    display: block;
    position: relative;
    width: var(--buttonSize);
    height: var(--buttonSize);
    border: 2px solid var(--primaryColor);
    border-radius: 100%;
    transition: 0.35s;
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 2px;
        left: 50%;
        top: 50%;
        background-color: var(--primaryColor);
        margin: -1px 0 0 -6px;
    }
    &::after {
        transform: rotate(90deg);
    }
}
.content {
    padding-top: 30px;
}

.accordion.isOpen {
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
