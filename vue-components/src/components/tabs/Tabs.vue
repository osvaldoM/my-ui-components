<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex pl-10 mb-0 list-none flex-wrap pt-3 flex-row border-b">
        <li
          v-for='(tab, index) in tabs'
          :key='tab.label'
          class="tab-header last:mr-0">
          <button
            class="tab-header-btn"
            @click="selectTab(index)"
            v-bind:class="{'border-b': (index != selectedIndex), 'active-tab-header-btn': (index == selectedIndex)}">
            {{ tab.label }}
          </button>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedTabIndex: {
      type: Number,
      default: 1,
    }
  },
  data(){
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  methods: {
    selectTab(i){
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  },
  created(){
    this.tabs = this.$children;
  },
  mounted(){
    this.selectTab(--this.selectedTabIndex)
  }
}
</script>
