<template>
  <v-table
    :data="tableData"
    :labelMap="labelMap"
    :options="optionMap"
    @changeData="updateTableData"
    @changeRowData="updateRowData"
  ></v-table>
</template>

<script>
import vTable from '@/base/table/table'
import { getTableData2 } from '@/api/table'

export default {
  data () {
    return {
      data: {},
      page: 1
    }
  },
  computed: {
    tableData: {
      get () {
        if (!this.data.rows) return
        let obj = JSON.parse(JSON.stringify(this.data))
        obj.rows = obj.rows.filter((v, i) => i >= (this.page - 1) * 10 && i < this.page * 10)
        obj.rows.forEach(v => {
          v.total = (v.price * 10 * v.count / 10).toFixed(2)
          v.price = (v.price).toFixed(2)
        })
        return obj
      }
    }
  },
  created () {
    this._getTableData()
    this.labelMap = {
      order: '单号',
      goods: '商品',
      price: '单价',
      count: '数量',
      total: '总计'
    }
    this.optionMap = [
      '审核',
      '修改',
      '删除'
    ]
  },
  methods: {
    updateTableData (value) {
      // console.log(value)
      this.page = value
    },
    updateRowData (...values) {
      this.$msgbox({
        title: '提交数据',
        message: values,
        confirmButtonText: '我知道了'
      })
    },
    _getTableData () {
      getTableData2().then((res) => {
        this.data = res.data
      })
    }
  },
  components: {
    vTable
  }
}
</script>
