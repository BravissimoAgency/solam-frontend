<template>
    <div class="locations flex flex-wrap justify-between">
        <div
            v-for="(location, index) in locations"
            :key="index"
            class="location"
        >
            <div class="row">
                <img
                    class="icon"
                    src="../../assets/images/icon-address.svg"
                >
                <div class="text">
                    <h3 class="heading">{{ location.name }}</h3>
                    <p v-html="location.address"></p>
                </div>
            </div>
            <div class="row">
                <img
                    class="icon"
                    src="../../assets/images/icon-tel.svg"
                >
                <p class="text">
                    Tel. <a :href="`tel:${location.phone}`">
                        {{ location.phone }}
                    </a>
                </p>
            </div>
            <div
                v-if="location.secondaryPhone"
                class="row"
            >
                <img
                    class="icon"
                    src="../../assets/images/icon-tel.svg"
                >
                <p class="text">
                    Tel. <a :href="`tel:${location.secondaryPhone}`">
                        {{ location.secondaryPhone }}
                    </a>
                </p>
            </div>
            <div
                v-if="location.fax"
                class="row"
            >
                <img
                    class="icon"
                    src="../../assets/images/icon-fax.svg"
                >
                <p class="text">
                    Fax. {{ location.fax }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        locations: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="postcss" scoped>
.locations {
    margin-bottom: -30px;
}
.location {
    margin-bottom: 30px;
    padding-right: 30px;
    @media (--mobile) {
        width: 100%;
        padding-right: 0;
    }
}
.row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;
    &:first-child {
        margin-bottom: 20px;
    }
    &:last-child {
        margin-bottom: 0;
    }
}
.icon {
    width: 22px;
    margin-top: 3px;
    @media (--mobile) {
        width: 20px;
    }
}
.text {
    width: calc(100% - 22px);
    padding-left: 28px;
    line-height: 1.63;
    font-size: 16px;
    @media (--mobile) {
        font-size: 15px;
        width: calc(100% - 20px);
    }
}
.heading {
    color: var(--primaryColor);
    text-transform: uppercase;
    letter-spacing: 1.6px;
    font-weight: 600;
    font-size: 16px;
    @media (--mobile) {
        font-size: 15px;
    }
}
a:hover {
    color: var(--primaryColor);
}
</style>
