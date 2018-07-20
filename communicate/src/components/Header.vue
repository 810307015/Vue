<template>
<div>
  <h1>我是一个header</h1>
  <p>这是父组件对我说的：{{ titleText }}</p>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    titleText: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
