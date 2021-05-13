<template>
  <div>
    <el-row :gutter="20" tag="测试1" type="flex" align="top" justify="start">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="kong">&nbsp;</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content-last bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default ({

})
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
