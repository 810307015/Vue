<template>
<div>
  <h1>我是一个content</h1>
  <p>这是与Sider共享的一个数据: {{ count }}</p>
  <button @click="divide">减少</button>
  <p>接下来可以使用组件通信来及时聊天</p>
  <div>
    <input type="text" v-model="msg">
    <button @click="postMsg">发送</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    count: function () {
      return this.$store.state.count
    }
  },
  methods: {
    divide () {
      this.$store.dispatch('divide')
    },
    postMsg () {
      this.$store.dispatch('postMsg', this.msg)
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
