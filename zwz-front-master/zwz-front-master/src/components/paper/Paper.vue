<template>
  <div>
    <el-row>
      <el-col :span=4>
        <div>
          <h3>&nbsp;</h3>
        </div>
      </el-col>
      <el-col :span="10">
        <div >
          <h3 style="font-family:yahei;padding-top:10px;"><strong style="text-align: center">{{paperData[1]}}</strong></h3>
          <div style="padding-top: 10px ;text-align: center">
            <el-button v-on:click="processClick_author(paperData[2])" width = "50">{{paperData[2]}}</el-button>
          </div>
          <div style="padding-top: 20px ;text-align: center">
            <el-button type="primary">
              <div @click="toRescue">
                {{paperData[9].substr(0,50)}}
              </div>
            </el-button>
          </div>
        </div>
        <div style="height:30px"></div>
        <div>
          <el-card body-style="padding-left:10px;padding-top:0px" >
            <div style="float:left;font-family:yahei">
              <h3><Strong>Abstract</strong></h3>
            </div>
          </el-card>
          <el-card class="box-card">
            <div style="text-align:justify">
              <h4>{{paperData[5]}}</h4>
            </div>
          </el-card>
        </div>
        <el-card body-style="padding-left:10px;padding-top:0px">
          <h4 style="float:left;font-family:yahei"><strong>keyword:</strong></h4>
          <h5 style="padding-top:14px"><font color='#007398'>{{paperData[4]}}</font></h5>
        </el-card>
        <el-card body-style="padding-left:10px;padding-top:0px">
          <h4 style="float:left;font-family:yahei"><strong>Published date:</strong></h4>
          <h5 style="padding-top:14px;"><font color='#007398'>{{paperData[7]}}</font></h5>
        </el-card>
        <el-card body-style="padding-left:10px;padding-top:0px">
          <h4 style="float:left;font-family:yahei"><strong>Publishing house:</strong></h4>
          <h5 style="padding-top:14px;"><font color='#007398'>{{paperData[3]}}</font></h5>
        </el-card>
      </el-col>
      <el-col :span="7" style="margin-left:30px;margin-top:20px">
        <el-card class="box-card" style="background-color:#909399">
          <div style="color:#F5F5F5">
            <h3><strong>Related Documents</strong></h3>
          </div>
        </el-card>
        <el-card class="box-card" style="background-color:#ffffff">
          <PaperRecommend></PaperRecommend>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from 'jquery'
import PaperRecommend from '../paperList/PaperRecommend'
export default {
  name: 'Paper',
  components: { PaperRecommend },
  inject: ['reload'],
  data () {
    return {
      name: this.$route.params.title,
      paperData: []
    }
  },
  mounted () {
    var self = this
    self.$axios
      .post('/api/api/simpleSearch/abstract', {
        title: this.$route.params.title
      })
      .then(response => {
        this.paperData = response.data[0]
        var newHref = this.paperData[9]
        $('#aa').attr('href', newHref)
      }
      )
  },
  methods: {
    processClick_author: function (name) {
      this.input = name
      this.$router.push('/Expert/' + this.input)
      this.reload()
    },
    toRescue () {
      window.location.href = this.paperData[9]
    }
  }
}
</script>

<style scoped>

</style>
