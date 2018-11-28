<template>
    <div class="twoColumn flex flex-wrap">
        <div class="column">
            <slot name="left"></slot>
        </div>
        <div class="column">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
:root {
    --gutter: 70px;
    --smallGutter: 25px;
}

.twoColumn {
    margin-left: calc(var(--gutter) * -1);
    margin-right: calc(var(--gutter) * -1);
    @media (--laptop) {
        margin-left: calc(var(--smallGutter) * -1);
        margin-right: calc(var(--smallGutter) * -1);
    }
}
.column {
    padding: 0 var(--gutter);
    width: 50%;
    @media (--laptop) {
        padding: 0 var(--smallGutter);
    }
}
</style>
