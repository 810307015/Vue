<template>
<div>
  <h1>我是一个Sider</h1>
  <p>这是与content共享的一个数据: {{ count }}</p>
  <button @click="add">增加</button>
  <ul>
    <li v-for="message in messages" :key="message.id">
      {{ message }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Sider',
  computed: {
    count: function () {
      return this.$store.state.count
    },
    messages: function () {
      return this.$store.state.messages
    }
  },
  methods: {
    add () {
      this.$store.dispatch('increament')
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
