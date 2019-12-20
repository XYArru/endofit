import store from './store'
<template>
  <div>
    <h3 style="float: left">个人资料</h3>
    <hr style="margin-top: 80px">
    <avatar style="float: left"></avatar>
    <section class="box" style="float: left;margin-left: 20px;background-color: white">
      <p style="float: left;color: gray;font-size: small">ID: &nbsp;{{store.state.user.id}}</p><br>
      <div class="clear"></div>
      <hr style="width: 800px">
      <p style="float: left;color: black">昵称: &nbsp;&nbsp;{{store.state.user.username}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Myprofile'
}
</script>

<style lang="scss" scoped>

</style>
