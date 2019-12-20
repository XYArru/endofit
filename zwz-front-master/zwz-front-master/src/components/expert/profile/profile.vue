<template>
  <div>
    <h3 style="float: left">专家信息</h3>
    <hr style="margin-top: 80px">
    <br>
    <br>
    <img style="float: left" src="../../../assets/blank.png">
    <section class="box" style="float: left;margin-left: 20px;background-color: white">
      <div style="float: left;color: black;margin-left: 100px">专家姓名: &nbsp;{{input0.substr(0,3)}}</div> <br>
      <div class="clear"></div> <br>
      <div style="float: left;color: black;margin-left: 100px">所属机构: &nbsp;&nbsp;{{info[0][3]}}</div> <br>
      <div class="clear"></div> <br>
      <div style="float: left;color: black;margin-left: 100px">联系邮箱: &nbsp;&nbsp;{{'暂无数据'}}</div> <br>
      <div class="clear"></div> <br>
      <div style="float: left;color: black;margin-left: 100px">联系电话: &nbsp;&nbsp;{{'暂无数据'}}</div> <br>
      <div class="clear"></div> <br>
      <div style="float: left;color: black;;margin-left: 100px;">个人简介： {{'暂无数据'}}</div>
      <div class="clear"></div> <br>
      <div class="clear"></div>
    </section>
    <div style="height: 300px"></div>
    <div>
      <PaperListExpert></PaperListExpert>
    </div>
  </div>

</template>

<script>
import PaperListExpert from '../../paperList/PaperListExpert'
export default {
  name: 'expert',
  components: {PaperListExpert},
  data () {
    return {
      input0: this.$route.params.input,
      info: []
    }
  },
  methods: {
    favor: function () {
      var self = this
      self.$axios.post('/api/api/findme', {
        author: this.input0
      })
        .then(function (response) {
          self.info = response.data
        })
        .catch(function (error) {
          alert(error)
        }
        )
      if (this.input0[2] === ';') {
        this.input0 = this.input0.substr(0, 2)
      } else {
        this.input0 = this.input0.substr(0, 3)
      }
    }
  },
  mounted () {
    this.favor()
  }

}
</script>

<style scoped>

</style>
