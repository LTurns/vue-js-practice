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

.button--primary {
    background-color: red;
    padding: 10px;
}

.button--secondary {
    background-color: yellow;
    padding: 10px;
}
</style>
