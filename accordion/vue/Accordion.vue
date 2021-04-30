<template>
    <div class="">
        <div class="w-100">
            <button class="bg-gray-50 py-5 px-2 hover:bg-blue-darker no-underline flex justify-start items-center w-full" @click.prevent="toggleState">
                <SvgIcon :icon="leftSideIcon" v-if="leftSideIcon" class="mr-4"></SvgIcon>
                <div class="flex flex-col items-baseline">
                    <span class="text-xl text-black">{{ title }}</span>
                    <span v-if="subtitle" class="text-sm text-gray-600">{{ subtitle }}</span>
                </div>
                <span class="rounded-full bg-gray-200 flex items-center p-2 ml-auto">
                    <svg-icon :icon="`${isFullScreen ? 'chevron-right' : 'chevron-down'}`" v-show="!active"></svg-icon>
                    <svg-icon icon="chevron-up" v-show="active"></svg-icon>
                </span>
            </button>
        </div>
        <div :class="`p-2 ${isFullScreen && 'full-screen-content'}`" v-show="active">
            <slot v-bind:toggle-state="toggleState" />
        </div>
    </div>
</template>

<script>
import SvgIcon from "./SvgIcon";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
        },
        leftSideIcon: {
            type: String,
            required: false
        },
        isFullScreen: {
            type: Boolean,
            default: false
        },
        isActive: { //TODO: use this prop
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            active: this.isFullScreen ? false : true
        }
    },
    methods: {
        toggleState() {
            this.active = !this.active
        }
    },
    components: {
        SvgIcon
    }
}
</script>

<style scoped lang="scss">

.full-screen-content {
    height: 100vh;
    position: fixed;
    top: 0;
    background: white;
    z-index: 10;
}
</style>
