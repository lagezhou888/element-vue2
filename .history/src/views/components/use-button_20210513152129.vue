<template>
  <div>
    <el-container>
      <el-aside width="300px">
          aside
      </el-aside>
      <el-container>
        <el-container>
          <el-header height="60">
            header
          </el-header>
          <el-main style="height: 10;flex-grow: 1;">
            main
          </el-main>
          <el-footer height="60">
            footer
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: calc(100vh - 70px)
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
