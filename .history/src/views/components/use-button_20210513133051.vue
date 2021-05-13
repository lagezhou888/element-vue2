<template>
  <div>
    <el-row :gutter="20" tag="span" type="flex" align="middle" justify="start">
      <!-- <el-col :span="4" :offset="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4" :push="2"><div class="kong">&nbsp;</div></el-col>
      <el-col :span="4" :pull="4"><div class="grid-content bg-purple"></div></el-col> -->
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content-last bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: '111', url: 'http://111' },
        { name: '111', url: 'http://111' }
      ]
    }
  },
  mounted () {
    console.log('old:' + this.list)
    this.list.forEach( element => {
      element.name += 'aaa'
    })
    console.log('new:' + this.list)
  }
}
</script>

<style lang="less" scoped>
  @minH: 100px;
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: @minH;
  }
  .grid-content-last {
    border-radius: 4px;
    min-height: 30px;
  }
  .kong {
    min-height: 1px;
  }
</style>
