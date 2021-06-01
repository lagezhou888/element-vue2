<template>
  <div>
    <!-- <div class="content"></div>
    <ul class="icon">
      <li><el-link type="primary" :underline="true">试试<i class="el-icon-delete-solid el-icon--right"></i></el-link></li>
      <li><i class="el-icon-search"></i></li>
      <li><i class="el-icon-setting"></i></li>
    </ul> -->
    <el-radio-group v-model="radioValue" size="normal" @change.native="radioChange($event)">
      <el-radio v-for="item in items" :key="item.id" :label="item.value" border>
        {{item.label}}
      </el-radio>
    </el-radio-group>
    <el-radio-group v-model="radioButtonValue" size="normal" @change="radioButtonChange" fill="red" text-color="black">
      <el-radio-button v-for="item in buttonItems" :key="item.id" :label="item.value" :disabled="isDisabled">
        {{item.label}}
      </el-radio-button>
    </el-radio-group>
    <div><el-checkbox v-model="isCheckAll" label="" :indeterminate="isIndeterminate" @change="selectAll">全选</el-checkbox></div>
    <el-checkbox-group v-model="checkList" @change="checkChange" :min="1" :max="3">
      <el-checkbox v-for="item in checkItems" :key="item.id" :label="item.value" border>
        {{item.label}}
      </el-checkbox>
    </el-checkbox-group>
    <el-checkbox-group v-model="checkList" size="normal"  @change="checkChange">
      <el-checkbox-button v-for="item in checkItems"
        :key="item.id" :label="item.value">
        {{item.label}}
      </el-checkbox-button>
    </el-checkbox-group>
    <el-input v-model="inputValue" prefix-icon="el-icon-search" suffix-icon="el-icon-thumb" type="number"
      placeholder="请输入" size="normal" clearable show-password @change="inputChange" :readonly="true"></el-input>
    <el-input type="textarea" :rows="2" v-model="inputValue" placeholder="" :readonly="true"
      :maxlength="20" show-word-limit :autosize="{ minRows: 2, maxRows: 4 }">
    </el-input>
    <el-autocomplete popper-class="my-autocomplete" v-model="inputAuto" placeholder=""
      clearable :trigger-on-focus="true" :popper-append-to-body="false"
      :fetch-suggestions="querySearch"  @select="handleSelect" :debounce="0">
      <i
        class="el-icon-edit el-input__icon"
        slot="suffix"
        @click="handleIconClick">
      </i>
      <span slot="prepend">啊</span>
      <span slot="append">啊</span>
      <i
        class="el-icon-edit el-input__icon"
        slot="prefix">
      </i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>
    <el-input v-model="inputValue" placeholder="输入数字" size="normal" clearable type="number"></el-input>

    <el-select v-model="selectValue" value-key="" placeholder="" multiple
      clearable filterable @change="selectChange" collapse-tags>
      <el-option v-for="item in selectList"
        :key="item.id"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px;margin-right: 20px;">{{ item.value }}</span>
      </el-option>
    </el-select>
    <el-date-picker v-model="dateValue" type="datetime" size="normal" placeholder="选择日期时间" default-time="12:00:00">
    </el-date-picker>

  </div>
</template>
<script>

export default {
  mounted () {
    this.restaurants = this.loadAll()
  },
  data () {
    return {
      dateValue: '',
      selectValue: [],
      selectList: [{
        id: 1,
        value: '选项1',
        label: '黄金糕'
      }, {
        id: 2,
        value: '选项2',
        label: '双皮奶'
      }, {
        id: 3,
        value: '选项3',
        label: '蚵仔煎'
      }, {
        id: 4,
        value: '选项4',
        label: '龙须面'
      }, {
        id: 5,
        value: '选项5',
        label: '北京烤鸭'
      }],
      inputAuto: '',
      restaurants: [],
      inputValue: '',
      trueLabel: '选中',
      falseLabel: '未选中',
      radioValue: '樱桃',
      radioButtonValue: '樱桃',
      checkList: [],
      isDisabled: false,
      isCheckAll: false,
      isIndeterminate: false,
      items: [
        { id: 1, label: '苹果', value: 1 },
        { id: 2, label: '樱桃', value: 2 },
        { id: 3, label: '香蕉', value: 3 }
      ],
      buttonItems: [
        { id: 1, label: '苹果', value: 1 },
        { id: 2, label: '樱桃', value: 2 },
        { id: 3, label: '香蕉', value: 3 }
      ],
      checkItems: [
        { id: 1, label: '苹果', value: 1 },
        { id: 2, label: '樱桃', value: 2 },
        { id: 3, label: '香蕉', value: 3 },
        { id: 4, label: '大枣', value: 4 },
        { id: 5, label: '核桃', value: 5 },
        { id: 6, label: '梨子', value: 6 }
      ]
    }
  },
  methods: {
    selectChange(val) {
      console.log(val)
    },
    handleIconClick (val) {
      console.log(val)
    },
    handleSelect (val) {
      console.log(val)
    },
    querySearch (queryString, cb) {
      const restaurants = this.restaurants
      const results = queryString ? restaurants.filter(v => v.value.toLowerCase().indexOf(queryString) > -1) : restaurants
      cb(results)
    },
    inputChange(e) {
      console.log(e)
    },
    radioChange (e) {
      // e.preventDefault()
      console.log(e.target.value)
    },
    radioButtonChange (val) {
      const label = this.buttonItems.find(v => v.id === val).label
      const index = this.buttonItems.findIndex(v => v.id === val)
      console.log(val + ':' + this.buttonItems[index].label)
      console.log(val + ':' + label)
    },
    checkChange (val) {
      this.isCheckAll = val.length === this.checkItems.length
      this.isIndeterminate = val.length > 0 && val.length < this.checkItems.length
    },
    checkButtonChange (val) {
      console.log(val)
    },
    selectAll (val) {
      const arrList = this.checkItems.map(v => {
        return v.id
      })
      this.checkList = val ? arrList : []
      this.isIndeterminate = false
    },
    loadAll() {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
        { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { value: '泷千家(天山西路店)', address: '天山西路438号' },
        { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { value: '贡茶', address: '上海市长宁区金钟路633号' },
        { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路1685号' },
        { value: '茶芝兰（奶茶，手抓饼）', address: '上海市普陀区同普路1435号' },
        { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
        { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
        { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
        { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号' },
        { value: 'Monica摩托主题咖啡店', address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
        { value: '浮生若茶（凌空soho店）', address: '上海长宁区金钟路968号9号楼地下一层' },
        { value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号' },
        { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
        { value: '快乐柠檬（神州智慧店）', address: '上海市长宁区天山西路567号1层R117号店铺' },
        { value: 'Merci Paul cafe', address: '上海市普陀区光复西路丹巴路28弄6号楼819' },
        { value: '猫山王（西郊百联店）', address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
        { value: '枪会山', address: '上海市普陀区棕榈路' },
        { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
        { value: '钱记', address: '上海市长宁区天山西路' },
        { value: '壹杯加', address: '上海市长宁区通协路' },
        { value: '唦哇嘀咖', address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
        { value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室' },
        { value: '爱茜茜里(近铁广场)', address: '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
        { value: '鲜果榨汁（金沙江路和美广店）', address: '普陀区金沙江路2239号金沙和美广场B1-10-6' },
        { value: '开心丽果（缤谷店）', address: '上海市长宁区威宁路天山路341号' },
        { value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号' },
        { value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号' },
        { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
        { value: '凡仔汉堡（老真北路店）', address: '上海市普陀区老真北路160号' },
        { value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
        { value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号' },
        { value: '饭典*新简餐（凌空SOHO店）', address: '上海市长宁区金钟路968号9号楼地下一层9-83室' },
        { value: '焦耳·川式快餐（金钟路店）', address: '上海市金钟路633号地下一层甲部' },
        { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
        { value: '浏阳蒸菜', address: '天山西路430号' },
        { value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路' },
        { value: '樱花食堂（凌空店）', address: '上海市长宁区金钟路968号15楼15-105室' },
        { value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号' },
        { value: '福荣祥烧腊（平溪路店）', address: '上海市长宁区协和路福泉路255弄57-73号' },
        { value: '速记黄焖鸡米饭', address: '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
        { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
        { value: '(小杨生煎)西郊百联餐厅', address: '长宁区仙霞西路88号百联2楼' },
        { value: '阳阳麻辣烫', address: '天山西路389号' },
        { value: '南拳妈妈龙虾盖浇饭', address: '普陀区金沙江路1699号鑫乐惠美食广场A13' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .content {
    height: 100px;
    width: 100px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .icon {
    font-size: 20px;
    text-align: left;
  }
  /deep/ .my-autocomplete {
    li {
      line-height: normal !important;;
      padding: 7px !important;
      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>
