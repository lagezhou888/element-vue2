<template>
  <div>
    <el-col :span="8" :offset="0">
      {{parentValue}}
      <el-input v-model="message" placeholder="" size="normal" clearable>
        <el-button type="primary" size="default" slot="append" @click="onClick">传值</el-button>
      </el-input>
    </el-col>
  </div>
</template>

<script>
import eventBus from '../../plugins/eventBus.js'
export default {
  props: {
    parentValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onClick () {
      eventBus.$emit('getMessage', this.message)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
