<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容" style="margin-left: -50px;width: 50%"></el-input>
    <div style="clear: both"></div>
    <el-button icon="el-icon-search" v-on:click="processClick_abstract">按主题检索</el-button>
    <el-button icon="el-icon-search" v-on:click="processClick_keyword">按关键词检索</el-button>
    <el-button icon="el-icon-search" v-on:click="processClick_author">按专家检索</el-button>
    <el-button icon="el-icon-search" v-on:click="processClick_advanced">高级检索</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import PaperListSearch from '../paperList/PaperListSearch'
export default {
  inject: ['reload'],
  components: {PaperListSearch},
  data () {
    return {
      input: ''
    }
  },
  methods: {
    processClick_keyword: function () {
      if (this.input === '') {
        this.$message({
          type: 'warning',
          message: '请输入搜索内容'
        })
      } else {
        this.$router.push('/search/keyword/' + this.input)
        this.reload()
      }
    },
    processClick_author: function () {
      if (this.input === '') {
        this.$message({
          type: 'warning',
          message: '请输入搜索内容'
        })
      } else {
        this.$router.push('/search/author/' + this.input)
        this.reload()
      }
    },
    processClick_abstract: function () {
      if (this.input === '') {
        this.$message({
          type: 'warning',
          message: '请输入搜索内容'
        })
      } else {
        this.$router.push('/search/abstract/' + this.input)
        this.reload()
      }
    },
    processClick_advanced: function () {
      this.$router.push('/advanced_search')
      this.reload()
    }
  }
}
</script>

<style scoped>

</style>
