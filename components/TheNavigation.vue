<template>
    <nav>
        <ul class="list-reset flex">
            <li
                v-for="item in menu.items"
                :key="item.ID"
                class="ml-6"
            >
                <AppLink
                    :url="item.url"
                    :target="item.target"
                    class="font-semibold"
                >
                    {{ item.title }}
                </AppLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import menu from '../static/json/menu.json';

export default {
    data: () => ({
        menu,
    }),
};
</script>

<style lang="postcss" scoped>
</style>
