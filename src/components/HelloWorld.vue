<template>
<div>
<f-header></f-header>
<f-button
  button-type="primary">Hello
</f-button>
</div>
</template>

<script>
import FButton from './Button/Button.vue';
import FHeader from './Header/Header.vue'
export default {
  name: 'HelloWorld',
  components: {
    FButton,
    FHeader
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
