import FHeader from '../Header.vue';
import { 
  withKnobs,
  select
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Header',
  decorators: [withKnobs, withA11y]
}

export const HeaderComponent = () => ({
  components: { FHeader },
  props: {
    headerSize: {
      default: select('Header Size', ['large', 'small'], 'large')
    }
  },
  template: 
  `<f-header
  :headerSize="headerSize">
  Default Header Styles
  </f-header>`
});

HeaderComponent.storyName = 'header'