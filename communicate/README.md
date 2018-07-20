# communicate

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 组件通信的三种方法

* 父组件通过v-bind绑定属性传递数据给子组件，子组件使用props属性接收。
* 子组件通过this.$emit(eventName)发射事件，父组件通过v-on绑定该事件。
* 通过vuex定义一个store，然后通过调用dispatch分发action来触发mutation中的方法。