<template>
  <div>
    <div id="Paper-list" v-if="show">
      <el-row>
        <div class="container" v-if="show">
          <el-col>
            <el-col :span="10">
              <el-table style="width: 100%"
                        :stripe="true"
                        :data="PaperList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                <el-table-column label="author" prop="author" >
                  <template slot-scope="scope">
                    <el-button @click="handleClickAuthor(scope.row)" type="text">{{scope.row[2]}}</el-button>
                  </template>
                </el-table-column>
                <el-table-column label="title" prop="title" >
                  <template slot-scope="scope">
                    <el-button @click="handleClickTitle(scope.row)" type="text">{{scope.row[1]}}</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination
                small
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="PaperList.length"
                width="200" >
              </el-pagination>
            </el-col>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <div style="clear: both"></div>
        </div>
      </el-row>
    </div>
    <div v-if="!show">
      <br>
      <br>
      <br>
      <img src="../../assets/blank.png">
      <br>
      <br>
      <p style="color: gray">空空如也</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaperRecommend',
  data () {
    return {
      currentPage: 1,
      pagesize: 10,
      PaperList: [],
      input: this.$route.params.input,
      show: true,
      listType: this.$route.params.listType
    }
  },
  mounted () {
    this.handlePaperList()
  },
  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size
      console.log(this.pagesize)
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    handlePaperList () {
      var self = this
      self.$axios.get('/api/api/last6')
        .then(function (response) {
          self.show = true
          self.PaperList = response.data
        })
        .catch(function (error) {
          alert(error)
        }
        )
    },
    handleClickAuthor (row) {
      this.$router.push('/Expert/' + row[2])
      this.reload()
    },
    handleClickTitle (row) {
      this.$router.push('/Paper/' + row[1])
      this.$router.go(0)
    }
  }

}
</script>

<style scoped>

</style>
