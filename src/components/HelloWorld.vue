<template>
<div>
<f-header></f-header>
<f-button
  button-type="primary">Hello
</f-button>
</div>
</template>

<script>
import FButton from './Button.vue';
import FHeader from './Header.vue'
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
