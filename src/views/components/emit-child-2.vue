<template>
  <div>
    {{message}}
  </div>
</template>

<script>
import eventBus from '../../plugins/eventBus'
export default {
  data () {
    return {
      message: '默认值'
    }
  },
  created () {
    this.getMessage()
  },
  methods: {
    getMessage () {
      eventBus.$on('getMessage', (message) => {
        this.message = message
        this.$emit('getValue', 'child2:' + message)
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
