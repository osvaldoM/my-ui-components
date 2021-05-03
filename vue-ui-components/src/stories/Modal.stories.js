import Modal from '../components/modal/Modal.vue';

export default {
  component: Modal,
  title: 'Components/Modal',
  argTypes: {
    isModalVisible: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: `<Modal v-bind="$props">
  </Modal>`,
});

export const Default = Template.bind({});

Default.args = {
  isModalVisible: true,
};
