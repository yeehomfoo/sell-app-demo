<template>
  <div id="app">
    <Header></Header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">content</div>
  </div>
</template>

<script>
import Header from './components/header/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
#app
  .tab
    width 100%
    display flex
    .tab-item
      flex 1
      height 40px
      line-height 40px
      text-align center

</style>
