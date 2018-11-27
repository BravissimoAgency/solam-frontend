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
}

.twoColumn {
    margin-left: calc(var(--gutter) * -1);
    margin-right: calc(var(--gutter) * -1);
}
.column {
    padding: 0 var(--gutter);
    width: 50%;
}
</style>
