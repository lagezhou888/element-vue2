<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" class="grid-content bg-purple"></el-col>
      <el-col :span="6" class="grid-content bg-purple"></el-col>
      <el-col :span="6" class="grid-content bg-purple"></el-col>
      <el-col :span="6" class="grid-content bg-purple"></el-col>
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
    height: @minH;
    &:nth-child(4)  {
      height: 20px;
    }
  }
</style>
