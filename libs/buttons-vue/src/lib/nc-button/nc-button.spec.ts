import { mount } from '@vue/test-utils';
import NcButton from './nc-button.vue';

describe('NcButton', () => {
  it('renders properly', () => {
    const wrapper = mount(NcButton, {});
    expect(wrapper.text()).toContain('Welcome to NcButton');
  });
});
