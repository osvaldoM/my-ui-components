import Tabs from "../../../tabs/vue/Tabs";


export default {
  component: Tabs,
  title: 'Components/Tab',
};

const Template = ( args ) => ({
  components: {Tabs},
  props: {args},
  template: '<Tabs v-bind="$props" />'
})

export const Primary = Template.bind({});

Primary.args = {

}
