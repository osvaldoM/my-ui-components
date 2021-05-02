<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <Tabs :selected-tab-index="2">
      <tab label="Tab 1">Hello From Tab 1</tab>
      <tab label="Tab 2">Hello From Tab 2</tab>
      <tab label="Tab 3">Hello From Tab 3</tab>
      <tab label="Tab 4">Hello From Tab 4</tab>
    </Tabs>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import Tabs from './components/tabs/Tabs.vue';
import Tab from './components/tabs/Tab.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    Tab,
    Tabs
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
