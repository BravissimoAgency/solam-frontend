<template>
    <gmap-map
        ref="gmap"
        :zoom="12"
        :center="center"
        :options="{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: mapStyle,
        }"
        map-type-id="roadmap"
    >
        <gmap-marker
            v-for="(position, index) in positions"
            :key="index"
            :icon="icon"
            :position="getPosition(position)"
            :draggable="false"
        />
    </gmap-map>
</template>

<script>
import mapStyle from '../utils/mapStyle.json';
import marker from '../assets/images/icon-marker.svg';

export default {
    props: {
        positions: {
            type: Array,
            required: true,
        },
        fitBounds: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        mapStyle,
    }),
    computed: {
        icon() {
            const width = 46.32;
            const height = 61.84;

            return {
                url: marker,
                size: {
                    f: 'px',
                    b: 'px',
                    width,
                    height,
                },
                scaledSize: {
                    f: 'px',
                    b: 'px',
                    width,
                    height,
                },
            };
        },
        center() {
            return this.getPosition(this.positions[0]);
        },
    },
    mounted() {
        if (!process.client || !this.fitBounds) return;

        this.$nextTick(() => {
            this.$refs.gmap.$mapPromise.then((map) => {
                const bounds = new window.google.maps.LatLngBounds();

                for (let i = 0; i < this.positions.length; i++) {
                    bounds.extend(this.getPosition(this.positions[i]));
                }

                map.fitBounds(bounds);
                map.panBy(0, -30);

                const zoom = map.getZoom();
                map.setZoom(zoom > 6 ? 6 : zoom);
            });
        });
    },
    methods: {
        getPosition(position) {
            return {
                lat: Number(position.lat),
                lng: Number(position.lng),
            };
        },
    },
};
</script>

<style lang="postcss" scoped>
.vue-map-container {
    width: 100%;
    height: 462px;
    @media (--laptop) {
        height: 400px;
    }
    @media (--mobile) {
        height: 250px;
    }
}
</style>
