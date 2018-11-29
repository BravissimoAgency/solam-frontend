<template>
    <button
        :class="{'isActive': open}"
        class="menuButton"
        type="button"
        @click="$emit('toggle')"
    >
        <div class="inner">
            <div
                v-if="labels"
                class="labels"
            >
                <span class="label">{{ label }}</span>
            </div>
            <div class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        labels: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        label() {
            return this.open ? 'Stäng meny' : 'Meny';
        },
    },
};
</script>

<style lang="postcss" scoped>
.menuButton {
    display: none;
    @media (--tablet) {
        display: block;
    }
}
.inner {
    display: flex;
    align-items: center;
}
.labels {
    margin-right: 20px;
}
.label {
    font-size: 18px;
    font-weight: 400;
    transition: 0.25s;
}
.hamburger {
    position: relative;
    width: 28px;
    height: 18px;
    @media (--mobile) {
        width: 24px;
        height: 16px;
    }
}
.line {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--primaryColor);
    left: 0;
    top: 0;
    transition: 0.25s;
}
.line:nth-child(2) {
    top: 50%;
    margin-top: -1px;
}
.line:nth-child(3) {
    top: 100%;
    margin-top: -2px;
}

.menuButton:hover .label {
    color: var(--primaryColor);
}

.menuButton.isActive {
    & .line {
        transform: rotate(45deg);
        margin-top: 8px;
        @media (--mobile) {
            margin-top: 6px;
        }
    }
    & .line:nth-child(2) {
        opacity: 0;
    }
    & .line:nth-child(3) {
        transform: rotate(-225deg);
        margin-top: -10px;
    }
}
</style>
