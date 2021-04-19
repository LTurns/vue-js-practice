<template>
  <component
  :is="componentType"
  :class="[
  $style[`button--${size}`],
  $style[`button--${buttonType}`]]"
  v-on="$listeners">
  <slot />
  </component>
</template>

<script>
import ActionButton from './Action.vue';
import LinkButton from './Link.vue';

export default {
  name: 'button',
  components: {
    ActionButton,
    LinkButton
  },
  props: {
    buttonSize: {
      type: String,
      default: 'medium'
    },
    buttonType: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    componentType () {
      return this.$attrs.href ? 'link-button' : 'action-button';
    }
  }
}
</script>

<style>
.button--small {
    width: 40px;
    height:20px;
}

.button--medium {
   width: 60px;
   height: 40px;
}

.button--large {
    width: 80px;
    height: 60px;
}

.button--primary {
    background-color: red;
}

.button--secondary {
    background-color: yellow;
}

.button--link {
    color: blue;
}
</style>
