<template>
  <div class="container">
    <Header :title-text="myHeader" />
    <div class="home">
      <div class="left">
        <Sider />
      </div>
      <div class="right">
        <Content />
      </div>
    </div>
    <Footer @tell="doAlertMsg" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Sider from '@/components/Sider'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Content,
    Sider,
    Footer
  },
  data () {
    return {
      myHeader: '坚持一下吧'
    }
  },
  methods: {
    doAlertMsg (msgs) {
      msgs.map(msg => alert(msg))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 80%;
  margin: 0 auto;
}

.home {
  width: 100%;
  overflow: hidden;
}

.left, .right {
  height: 500px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #ccc;
}

.left {
  float: left;
  width: 26%;
}

.right {
  float: right;
  width: 70%;
}
</style>
