import { 
  withKnobs,
  select
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import FButton from '../Button.vue';

export default {
  title: 'Button',
  decorators: [withKnobs, withA11y]
}

export const ButtonComponent = () => ({
  components: { FButton },
  props: {
    buttonType: {
      default: select('Button Type', ['primary', 'secondary'], 'primary')
    }
},

  template: 
  `<f-button
    :buttonType="buttonType">
    Default Button Styles
  </f-button>`
});

ButtonComponent.storyName = 'button'