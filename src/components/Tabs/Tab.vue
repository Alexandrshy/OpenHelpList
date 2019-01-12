<template>
  <div class="tabs__details-item" v-show="selected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    }
  }
};
</script>
