<template>
  <div>
      <emit-child-1 :parentValue="message"></emit-child-1>
      <emit-child-2 @getValue="getValue"></emit-child-2>
      {{message}}
  </div>
</template>

<script>
import EmitChild1 from './emit-child-1.vue'
import EmitChild2 from './emit-child-2.vue'

export default {
  components: {
    EmitChild1,
    EmitChild2
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    getValue (message) {
      this.message = message
    }
  }
}
</script>
<style lang="less" scoped>

</style>
