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
import { getTableData1 } from '@/api/table'

export default {
  data () {
    return {
      data: {}
    }
  },
  computed: {
    tableData: {
      get () {
        if (!this.data.rows) return
        let obj = JSON.parse(JSON.stringify(this.data))
        obj.rows.forEach(v => {
          v.sex = v.sex ? '男' : '女'
        })
        return obj
      }
    }
  },
  created () {
    this._getTableData()
    this.labelMap = {
      id: '工号',
      name: '姓名',
      sex: '性别',
      tel: '手机号',
      date: '入职日期'
    }
    this.optionMap = [
      '编辑',
      '删除'
    ]
  },
  methods: {
    updateTableData (value) {
      console.log(value)
    },
    updateRowData (...values) {
      // console.log(values)
      this.$msgbox({
        title: '提交数据',
        message: values,
        confirmButtonText: '我知道了'
      })
    },
    _getTableData () {
      getTableData1().then((res) => {
        this.data = res.data
      })
    }
  },
  components: {
    vTable
  }
}
</script>
