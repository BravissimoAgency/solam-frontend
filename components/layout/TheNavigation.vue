<template>
    <nav class="theNavigation">
        <ul class="list-reset flex">
            <li
                v-for="item in menu.items"
                :key="item.ID"
                class="item"
            >
                <AppLink
                    :url="item.url"
                    :target="item.target"
                    class="link uppercase"
                >
                    {{ item.title }}
                </AppLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import menu from '../../static/json/menu.json';

export default {
    data: () => ({
        menu,
    }),
};
</script>

<style lang="postcss" scoped>
.link {
    letter-spacing: 2.8px;
    font-size: 14px;
    font-weight: 600;
    margin-left: 38px;
    @media (--laptop) {
        margin-left: 32px;
    }
}
.link:hover,
.nuxt-link-exact-active {
    color: var(--primaryColor);
}
</style>
