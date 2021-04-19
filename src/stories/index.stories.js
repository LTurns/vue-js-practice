import { 
  withKnobs,
  select,
  text
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import Button from '../components/Button.vue'

export default {
  title: 'Button',
  decorators: [withKnobs, withA11y]
}

export const ButtonComponent = () => ({
  components: { Button },
  props: {
    buttonType: {
      default: select('Button Type', ['primary', 'secondary', 'link'], 'primary')
  },
  buttonSize: {
      default: select('Button Size', ['small', 'medium', 'large'], 'medium')
  },
  href: {
    default: text('href', '')
  }
},

  template: 
  `<button
    :buttonType="buttonType"
    :buttonSize="buttonSize"
    :href="href">
    Default Text
  </button>`
});

ButtonComponent.storyName = 'button'