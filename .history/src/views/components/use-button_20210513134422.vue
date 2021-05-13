<template>
  <div>
    <el-container :direction="vertical">
      <el-header height="">
        <!-- Header content -->
      </el-header>
      <el-container :direction="horizontal">
        <el-aside width="200px">
          <!-- Aside content -->
        </el-aside>
        <el-container :direction="vertical">
          <el-main height="">
            <!-- Main content -->
          </el-main>
          <el-footer height="">
            <!-- Footer content -->
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
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
    console.log('old:' + JSON.stringify(this.list))
    this.list.forEach(element => {
      element.name += 'aaa'
    })
    console.log('new:' + JSON.stringify(this.list))
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
