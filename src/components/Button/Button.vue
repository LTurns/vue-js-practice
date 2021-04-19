/* eslint-disable vue/no-duplicate-attributes */
<template>
  <button
  :class="`button--${buttonType}`"
  v-on="$listeners">
  <slot />
  </button>
</template>

<script>
export default {
  name: 'FButton',
  props: {
    buttonType: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>

#button--small {
  width: 50px;
  height: 100px;
}

#button--large {
  width: 100px;
  height: 150px;
}

.button--primary {
    background-color: red;
    padding: 10px;
}

.button--secondary {
    background-color: yellow;
    padding: 10px;
}
</style>
