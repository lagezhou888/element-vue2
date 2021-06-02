<template>
  <div>
    <gantt
      ref="gantt"
      :tasks="tasks"
      :isExpandAll="true"
      :isReadonly="false"
      @beforeInit="beforeInit"
      ></gantt>
  </div>
</template>

<script>

import gantt from './gantt/index'

export default {
  components: {
    gantt
  },
  methods: {
    beforeInit(gantt) {
      this.setConfigs(gantt)
    },
    setConfigs(gantt) {
      gantt.config.columns = [
        {
          name: 'owner',
          label: '负责人',
          // min_width: 100,
          resize: true,
          tree: true,
          template(obj) {
            return '【' + obj.owner + '】'
          }
        },
        {
          name: 'owner',
          label: '类型',
          resize: true,
          align: 'center',
          min_width: 100
        },
        {
          name: 'owner',
          label: '品种',
          align: 'center',
          resize: true,
          min_width: 100
        }
      ]
    }
  },
  data() {
    return {
      tasks: {
        data: [
          { id: 1, text: 'Task #1', start_date: '15-04-2020', owner: '张总', duration: 10, progress: 0.6 },
          { id: 2, text: 'Task #2', start_date: '20-05-2020', owner: '李总', duration: 20, progress: 0.4 },
          { id: 3, text: 'Task #2-1', start_date: '12-06-2020', owner: '赵总', duration: 38, progress: 0.4, parent: 2 }
        ]
        // links: [{ id: 1, source: 1, target: 2, type: '0' }]
      }
    }
  }
}
</script>

<style lang="less">

</style>
