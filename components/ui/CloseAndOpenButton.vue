<template>
    <button
        type="button"
        class="closeAndOpenButton"
        @click="$emit('click')"
    >
        <span class="buttonInner">
            <span class="buttonTextHolder">
                <span class="buttonText buttonText--open">Read more</span>
                <span class="buttonText buttonText--close">Close</span>
            </span>
            <span class="buttonIcon"></span>
        </span>
    </button>
</template>

<style lang="postcss" scoped>
:root {
    --buttonSize: 40px;
    --buttonSizeSmall: 32px;
    --buttonSizeSmaller: 26px;
}
.buttonInner {
    display: flex;
    align-items: center;
}
.buttonTextHolder {
    position: relative;
    width: 150px;
    height: 24px;
    @media (--mediumTablet) {
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
    @media (--tablet) {
        font-size: 15px;
    }
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
    @media (--tablet) {
        width: var(--buttonSizeSmall);
        height: var(--buttonSizeSmall);
    }
    @media (--mobile) {
        width: var(--buttonSizeSmaller);
        height: var(--buttonSizeSmaller);
    }
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
</style>
