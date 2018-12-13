<template>
    <aside
        :class="{'isOpen': open}"
        class="expandedMenu"
    >
        <nav class="inner">
            <ul class="list list-reset">
                <li
                    v-for="item in menu.items"
                    :key="item.ID"
                    class="item relative"
                    @click="$emit('close')"
                >
                    <AppLink
                        :url="item.url"
                        :target="item.target"
                        class="link"
                    >
                        {{ item.title }}
                    </AppLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
import menu from '../static/json/menu.json';

export default {
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        menu,
    }),
};
</script>

<style lang="postcss" scoped>
.expandedMenu {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 250px;
    z-index: 40;
    overflow: auto;
    background-color: var(--primaryColor);
    opacity: 0;
    transition-delay: 0.35s;
    &.isOpen {
        opacity: 1;
        transition-delay: 0s;
    }
}

.list {
    padding: 0;
    padding-bottom: 30px;
    padding-top: 60px;
    padding-left: 25px;
    @media (--mobile) {
        padding-top: 38px;
    }
}

.link {
    font-weight: 600;
    font-size: 16px;
    padding: 20px 25px;
    display: block;
    border-bottom: 1px solid #fff;
    padding-left: 0;
    color: rgba(255, 255, 255, 0.75);
    &.nuxt-link-active {
        color: rgba(255, 255, 255, 1);
    }
}
</style>
