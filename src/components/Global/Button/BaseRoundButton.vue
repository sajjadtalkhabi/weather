<template>
    <v-tooltip bottom :disabled="!tooltip">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                fab
                v-bind="attrs"
                v-on="on"
                :x-small="xs"
                :small="sm"
                :large="lg"
                :x-large="xl"
                :outlined="outlined"
                :dark="dark"
                :light="light"
                @click.stop="$emit('click')"
                :class="!outlined ? color + '-btn' : ''"
                :color="color === 'primary' ? 'primary' : ''"
                :disabled="disabled"
                :type="type"
            >
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
        </template>
        <span>{{ tooltip }}</span>
    </v-tooltip>
</template>

<script>
export default {
    name: "BaseRoundButton",
    props: {
        xs: Boolean,
        sm: Boolean,
        lg: Boolean,
        xl: Boolean,
        outlined: Boolean,
        dark: Boolean,
        light: Boolean,
        icon: String,
        color: String,
        tooltip: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "button"
        }
    }
};
</script>

<style>
.v-btn--fab.v-size--small {
    width: 45px !important;
    height: 45px !important;
}
</style>
