<template>
  <div>
    <h1>我是一个footer</h1>
    <div>
        <button @click="tellApp">我给父组件说句话</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    tellApp () {
      this.$emit('tell', ['人生不易，且行且珍惜', '珍惜当下，把握现在'])
    }
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
