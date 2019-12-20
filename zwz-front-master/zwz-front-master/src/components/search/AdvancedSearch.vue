<template>
  <div>
    <el-container>
      <el-header>
        <el-input v-model="input0" placeholder="请输入内容"></el-input>
      </el-header>
      <div>
        <el-radio-group v-model="relation">
          <el-radio-button label="AND"></el-radio-button>
          <el-radio-button label="OR"></el-radio-button>
          <el-radio-button label="NOT"></el-radio-button>
        </el-radio-group>
      </div>
      <el-footer>
        <el-input v-model="input1" placeholder="请输入内容"></el-input>
      </el-footer>
    </el-container>
    <el-button icon="el-icon-search" v-on:click="processClick">高级检索</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdvancedSearch',
  data () {
    return {
      input0: '',
      input1: '',
      relation: 'AND'
    }
  },
  methods: {
    processClick: function () {
      if (this.input0 === '' || this.input1 === '') {
        this.$message({
          type: 'warning',
          message: '请输入搜索内容'
        })
      } else {
        this.$router.push('/advanced_search/' + this.input0 + '/' + this.relation + '/' + this.input1)
        this.reload()
      }
    }
  }
}

</script>

<style scoped>

</style>
