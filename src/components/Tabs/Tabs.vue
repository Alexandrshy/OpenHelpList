<template>
  <div class="tabs">
    <div class="tabs__button-wrapper">
      <ul class="tabs__button-list">
        <li
          class="tabs__button-item"
          v-for="tab in tabs"
          :class="{ 'is-active': tab.selected}"
          :key="tab.name"
        >
          <button
            @click="selectedTab(tab.name)"
            class="tabs__button"
            :class="{ 'is-active': tab.selected}"
          >
            {{tab.name}}
            <span class="tabs__button-quantity">{{tab.length}}</span>
          </button>
        </li>
      </ul>
      <button class="button" @click="$router.push('/post-a-task')">Post a task</button>
    </div>
    <ul class="tabs__details-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabs",
  created: function() {
    this.tabs = this.$children;
  },
  data() {
    return {
      tabs: []
    };
  },
  methods: {
    selectedTab(tabName) {
      this.$emit("clickTab", tabName);
    }
  }
};
</script>

<style>
@import "./style/tabs.css";
</style>
