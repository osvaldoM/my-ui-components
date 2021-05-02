import Tabs from "../components/tabs/Tabs";
import Tab from "../components/tabs/Tab";


export default {
  component: Tabs,
  title: 'Components/Tab',
};

const Template = ( args ) => ({
  components: {Tabs, Tab},
  props: {args},
  template: `<Tabs v-bind="$props">
    <tab label="Tab 1">Hello From Tab 122</tab>
    <tab label="Tab 2">Hello From Tab 2</tab>
    <tab label="Tab 3">Hello From Tab 3</tab>
    <tab label="Tab 4">Hello From Tab 4</tab>
  </Tabs>`
})

export const Primary = Template.bind({});

Primary.args = {

}
