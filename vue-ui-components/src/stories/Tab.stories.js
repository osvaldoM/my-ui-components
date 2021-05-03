import Tabs from '../components/tabs/Tabs.vue';
import Tab from '../components/tabs/Tab.vue';

export default {
  component: Tabs,
  title: 'Components/Tab',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs, Tab },
  template: `<Tabs v-bind="$props">
    <tab label="Tab 1">Tab 1</tab>
    <tab label="Tab 2">Tab 2</tab>
    <tab label="Tab 3">Tab 3</tab>
    <tab label="Tab 4">Tab 4</tab>
  </Tabs>`,
});

export const Default = Template.bind({});

Default.args = {
};

export const WithInitialTab = Template.bind({});
WithInitialTab.args = {
  selectedTabIndex: 3,
};
