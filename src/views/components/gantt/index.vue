<template>
  <div>
    <div class="toolbar-wrapper">
      <el-button class="toolbar-btn" type="text" icon="el-icon-refresh" size="medium">刷新</el-button>
      <el-button class="full-btn" type="text" icon="el-icon-full-screen" size="medium"></el-button>
      <el-select class="select-btn" v-model="setLevel" size="mini" value-key="" placeholder="" clearable filterable @change="onSetLevel">
        <el-option v-for="item in setLevelList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="gantt_wrapper">
      <div ref="gantt" class="gantt-container" />
    </div>
  </div>
</template>

<script>
import gantt from 'dhtmlx-gantt' // 引入模块
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
const setLevelList = [
  {label: '年', value: 'year'}, {label: '月', value: 'month'}, {label: '周', value: 'week'}, {label: '日', value: 'day'}, {label: '区间', value: 'quarter'}
]
export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default() {
        return {
          data: [],
          links: []
        }
      }
    },
    // setLevel: {
    //   type: String,
    //   default: 'year'
    // },
    isExpandAll: {
      type: Boolean,
      default: false
    },
    isReadonly: {
      type: Boolean,
      default: false
    },
    rowHeight: {
      type: Number,
      default: 32
    },
    height: {
      type: String,
      default: '450px'
    }
  },
  mounted() {
    // const that = this
    // 本地化
    gantt.i18n.setLocale('cn')

    gantt.config.readonly = this.isReadonly
    gantt.config.drag_move = false // 禁止拖拽移动
    gantt.config.drag_progress = false // 禁止拖拽进度
    gantt.config.show_progress = false // 禁止使用制进度条
    gantt.config.drag_resize = false // 禁止拖动移动大小
    gantt.config.drag_links = false // 禁止拖拽链接
    gantt.config.autoscroll = true // 滚动
    gantt.config.resize_rows = true // 可自动调整高度
    gantt.config.details_on_dblclick = false // 禁用双击
    gantt.config.open_tree_initially = this.isExpandAll // 是否默认打开树节点

    gantt.config.grid_resize = true
    gantt.config.fit_tasks = true // 自动调整整体时间
    // gantt.config.duration_unit = 'minute'

    // gantt.config.scale_unit = 'day' // 设置时间坐标轴单位
    // gantt.config.order_branch = true // 允许拖拽
    // gantt.config.order_branch_free = true
    // gantt.config.scale_height = 50 // 设置表头高度

    gantt.config.row_height = this.rowHeight // 定义甘特图的行高
    gantt.config.grid_resizer_attribute = 'gridresizer'
    // gantt.config.grid_width = 400
    // gantt.config.grid_elastic_columns = true // 调整可滚动网格内列的宽度（有横向滚动条时可用）
    // gantt.config.layout = {
    //   css: 'gantt_container',
    //   rows: [
    //     {
    //       cols: [
    //         {
    //           view: 'grid',
    //           scrollX: 'scrollHor',
    //           scrollY: 'scrollVer'
    //         },
    //         { resizer: true, width: 1 },
    //         {
    //           view: 'timeline',
    //           scrollX: 'scrollHor',
    //           scrollY: 'scrollVer'
    //         },
    //         {
    //           view: 'scrollbar',
    //           id: 'scrollVer'
    //         }
    //       ]
    //     },
    //     {
    //       view: 'scrollbar',
    //       id: 'scrollHor'
    //     }
    //   ]
    // }

    gantt.templates.grid_folder = function(item) {
      // return "<div class='gantt_tree_icon gantt_folder_" +
      //   (item.$open ? 'open' : 'closed') + "'></div>"
      return ''
    }

    gantt.templates.grid_file = function(item) {
      // return "<div class='gantt_tree_icon gantt_file'></div>"
      return ''
    }
    this.setTemplate()
    this.setUnitView()
    this.$emit('beforeInit', gantt)

    // gantt.config.columns[1].sort = 'owner'
    // 初始化
    gantt.init(this.$refs.gantt)
    // 数据解析
    gantt.parse(this.tasks)
    // gantt.eachTask(function(task) {
    //   task.$open = that.isExpandAll
    // })
    // gantt.render()
  },
  methods: {
    setTemplate() {
      gantt.plugins({
        tooltip: true
      })
      gantt.templates.tooltip_date_format = function (date) {
        var formatFunc = gantt.date.date_to_str('%Y-%m-%d %H:%i')
        return formatFunc(date)
      }
      gantt.templates.task_class = (start, end, task) => {
        return 'gantt-cell'
      }
      gantt.templates.tooltip_text = function(start, end, task) {
        return '<b>Task:</b> ' + task.text + '<br/><b>Start date:</b> ' +
          gantt.templates.tooltip_date_format(start) +
          '<br/><b>End date:</b> ' + gantt.templates.tooltip_date_format(end)
      }
    },
    onSetLevel(e) {
      this.setLevel = e
      this.setUnitView()
    },
    // 设置单位视图
    setUnitView() {
      const zoomConfig = {
        levels: [
          {
            name: 'day',
            scale_height: 50,
            min_column_width: 20,
            scales: [
              { unit: 'month', step: 1, format: '%Y %m' },
              { unit: 'day', step: 1, format: '%d' }
            ]
          },
          {
            name: 'week',
            scale_height: 50,
            min_column_width: 25,
            scales: [
              { unit: 'month', format: '%Y %m' },
              {
                unit: 'week',
                step: 1,
                format: function (date) {
                  const weekNum = gantt.date.date_to_str('%W')(date)
                  return weekNum
                }
              }
            ]
          },
          {
            name: 'month',
            scale_height: 50,
            min_column_width: 40,
            scales: [
              { unit: 'year', step: 1, format: '%Y' },
              { unit: 'month', format: '%m' }
            ]
          },
          {
            name: 'quarter',
            height: 50,
            min_column_width: 90,
            scales: [
              { unit: 'month', step: 1, format: '%M' },
              {
                unit: 'quarter',
                step: 1,
                format: function (date) {
                  var dateToStr = gantt.date.date_to_str('%M')
                  var endDate = gantt.date.add(gantt.date.add(date, 3, 'month'), -1, 'day')
                  return dateToStr(date) + ' - ' + dateToStr(endDate)
                }
              }
            ]
          },
          {
            name: 'year',
            scale_height: 27,
            min_column_width: 30,
            scales: [{ unit: 'year', step: 1, format: '%Y' }]
          }
        ]
      }
      gantt.ext.zoom.init(zoomConfig)
      gantt.ext.zoom.setLevel(this.setLevel)
    }
  },
  data() {
    return {
      setLevelList: setLevelList,
      setLevel: 'month'
    }
  }
}
</script>

<style lang="less">
  .toolbar-wrapper {
    position: relative;
    margin: 3px 20px 0 20px;
    min-height: 32px;
    background: rgba(0, 82, 156, 0.1);
    border-bottom: 1px solid #00529c;
    .full-btn{
      position: absolute;
      top: 3px;
      right: 20px;
      padding: 5px;
      color: #003f59;
      &:hover {
        border: 1px solid #a3d0e4;
        border-radius: 4px;
        background-color: #daecf4;
      }
    }
    .toolbar-btn {
      padding: 0 5px;
      min-height: 32px;
      border-radius: 4px;
      color: #003f59;
      cursor: pointer;
      &:hover {
        background: #7ad2f7;
      }
    }
    .select-btn {
      width: 80px;
      margin: 3px 5px;
    }
  }
  .gantt_wrapper {
    height: 100%;
    background-color:#FFF;
    padding: 0 20px;
    .gantt-container {
      height: calc(100vh - 40px);
    }
    .gantt-cell {
      color: red;
    }
  }
  .gantt_task_scale {
    background-color: #e5edf5;
  }
  .gantt_grid_scale .gantt_grid_head_cell {
    color: #333333;
  }
  .gantt_task .gantt_task_scale .gantt_scale_cell {
    border-color: #ebebeb;
    color: #333333;
  }
</style>
