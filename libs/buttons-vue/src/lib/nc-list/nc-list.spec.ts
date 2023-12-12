import { mount } from '@vue/test-utils';
import NcList from './nc-list.vue';

describe('NcList', () => {
  it('renders properly', () => {
    const wrapper = mount(NcList, {});
    expect(wrapper.text()).toContain('Welcome to NcList');
  });
});
