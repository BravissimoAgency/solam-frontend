<template>
    <div class="page">
        <TopSection
            :top-section="topSection"
        />
    </div>
</template>

<script>
import TopSection from '../components/ui/TopSection.vue';

export default {
    components: {
        TopSection,
    },
    head() {
        return {
            title: 'Page not found - Solam',
        };
    },
    data: () => ({
        topSection: {
            heading: '404 - Page not found',
            background_image: {
                url: 'https://wp.solam.com/wp-content/uploads/2018/12/top-basicinformation.jpg',
            },
        },
    }),
};
</script>
