<template>
    <component
        :is="typeOfElement(url)"
        :class="{'isLoading': loading, 'isDisabled': disabled}"
        v-bind="setUrlAttr(url)"
        class="button"
        @click="$emit('click')"
    >
        <div class="flex">
            <div class="inner w-full">
                <div class="label">{{ label }}</div>
                <img
                    v-if="icon"
                    :src="icon"
                    class="icon"
                >
            </div>
        </div>
        <div class="loading">
            <img
                class="loadingIcon"
                src="../../assets/images/spinner.svg"
                alt=""
            >
        </div>
    </component>
</template>

<script>
import { baseUrl } from '../../utils/config';
import { makeUrlRelative } from '../../utils/helpers';

export default {
    props: {
        label: {
            type: String,
            default: 'Read more',
        },
        icon: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        url: {
            type: String,
            default: null,
        },
        target: {
            type: String,
            default: null,
        },
        buttonType: {
            type: String,
            default: 'button',
        },
    },
    computed: {
        isRelative() {
            return !this.url.startsWith('http');
        },
    },
    methods: {
        setUrlAttr(url) {
            if (!url) {
                return { type: this.buttonType };
            }

            if (url.indexOf(baseUrl) !== -1 || this.isRelative) {
                return {
                    to: makeUrlRelative(url),
                    target: this.target,
                };
            }

            return {
                href: url,
                target: this.target,
            };
        },
        typeOfElement(url) {
            if (!url) {
                return 'button';
            }

            if (url.indexOf(baseUrl) !== -1 || this.isRelative) {
                return 'router-link';
            }

            return 'a';
        },
    },
};
</script>

<style lang="postcss" scoped>
.button {
    background-color: transparent;
    padding: 15px 30px;
    min-width: 206px;
    display: inline-block;
    text-align: center;
    position: relative;
    user-select: none;
    border: 2px solid #fff;
    color: #fff;
    @media (--tablet) {
        padding: 13px 20px;
        min-width: 180px;
    }
    @media (--mobile) {
        padding: 10px 15px;
        min-width: 134px;
    }
    &.isDisabled {
        cursor: default;
        opacity: 0.6;
        pointer-events: none;
    }
    &:hover {
        background-color: #fff;
        color: var(--primaryColor);
    }
}
.inner {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
}
.label {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    @media (--mobile) {
        font-size: 12px;
        letter-spacing: 2.2px;
    }
}
.icon {
    width: 24px;
    height: 24px;
    margin-left: 14px;
    display: flex;
    flex-shrink: 0;
}
.loading {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
    opacity: 0;
}
.loadingIcon {
    width: 100%;
    height: 100%;
}

.button.isLoading {
    pointer-events: none;
    & .inner {
        opacity: 0;
    }
    & .loading {
        opacity: 1;
    }
    & .loadingIcon {
        animation-name: rotate;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(360deg);
    }
}
</style>
