<template>
  <div class='tab' v-show='isActive'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    label: {
      required: true,
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
