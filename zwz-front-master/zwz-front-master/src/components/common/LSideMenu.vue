<template>
  <el-menu
    class="categories"
    background-color="white"
    default-active='activeIndex'>
    <el-menu-item index="0" style="color: gray" v-on:click="gotoList('0', 'listRecommend')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '0'}">推荐</span>
    </el-menu-item>
    <el-menu-item index="1" style="color: gray" v-on:click="gotoList('1', 'listFollow')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '1'}">收藏</span>
    </el-menu-item>
    <el-menu-item index="2" style="color: gray" v-on:click="gotoList('2', 'Vue')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '2'}">软件工程</span>
    </el-menu-item>
    <el-menu-item index="3" style="color: gray" v-on:click="gotoList('3', 'Springboot')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '3'}">操作系统</span>
    </el-menu-item>
    <el-menu-item index="4" style="color: gray" v-on:click="gotoList('4', 'MongoDB')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '4'}">编译原理</span>
    </el-menu-item>
    <el-menu-item index="5" style="color: gray" v-on:click="gotoList('5', 'HTML')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '5'}">计算机网络</span>
    </el-menu-item>
    <el-menu-item index="6" style="color: gray" v-on:click="gotoList('6', 'Others')">
      <i class="el-icon-menu"></i>
      <span slot="title" :class="{'textcolor' : activeIndex === '6'}">杂项</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  inject: ['reload'],
  data () {
    return {
      activeIndex: window.localStorage.getItem('SMaP')
    }
  },
  methods: {
    gotoList: function (active, Type) {
      this.changeActive(active)
      this.$router.push('/index/PaperList/' + Type)
      this.reload()
    },
    changeActive: function (index) {
      this.activeIndex = index
      window.localStorage.setItem('SMaP', index)
      console.log(index)
    }
  }
}
</script>

<style scoped>
  .categories {
    width: 150px;
  }
  .textcolor {
    color: dodgerblue;
  }
</style>
