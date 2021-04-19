<template>
<f-button
  button-type="primary"
  button-size="medium">Hello
</f-button>
</template>

<script>
import FButton from './Button.vue';
export default {
  name: 'HelloWorld',
  components: {
    FButton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
body {
  color: #42b983;
}

</style>
