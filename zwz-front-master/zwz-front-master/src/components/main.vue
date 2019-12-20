<template>
<!--  <body id="poster">-->
  <el-container>
    <el-header>
      <nav-menu></nav-menu>
    </el-header>
    <el-container>
      <!--<el-aside width="180px">
        <LSideMenu></LSideMenu>
      </el-aside>-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavMenu from './common/NavMenu'
import LSideMenu from './common/LSideMenu'
export default {
  name: 'Main',
  components: {
    NavMenu,
    LSideMenu
  },
  mounted () {
    // ???
    window.localStorage.setItem('bid', 'goudan')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #poster {
    background:url("../assets/timg.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }

</style>
