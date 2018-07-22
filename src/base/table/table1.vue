<template>
  <div>
    <h3>Table 表格</h3>
    <p> Element 的 Table 表格的功能是比较强大的，可对数据进行排序、筛选、对比或其他自定义操作。由于没有后端程序，下面的表格数据由Mock.js生成。</p>
    <div class="demo-block">
      <el-table :data="tableData1" border>
        <el-table-column
          prop="id"
          label="工号"
          sortable
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          min-width="80"
          :filters="[{ text: '男', value: 1 }, { text: '女', value: 0 }]"
          :filter-method="(value, row) => row.sex === value"
          filter-placement="bottom-start">
          <template slot-scope="scope">
            {{ scope.row.sex === 1 ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column
          prop="tel"
          label="手机号"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="入职日期"
          sortable
          min-width="180">
        </el-table-column>
      </el-table>
    </div>
    <!-- <div class="demo-block">
      <el-table :data="tableData2" border show-summary :summary-method="getSummaries">
        <el-table-column
          prop="order"
          label="单号"
          min-width="135">
        </el-table-column>
        <el-table-column
          prop="goods"
          label="商品"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
          min-width="120">
          <template slot-scope="scope">
            {{ scope.row.price.toFixed(2) + ' 元/件' }}
          </template>
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量"
          min-width="120">
          <template slot-scope="scope">
            <input type="number" min="1" max="99" v-model="scope.row.count">
            <el-input-number v-model="scope.row.count" controls-position="right" size="small" :min="1" :max="99"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          prop="total"
          label="小计"
          min-width="120">
          <template slot-scope="scope">
            {{ (scope.row.price * scope.row.count).toFixed(2) + ' 元' }}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          align="center"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="tableData2.splice(scope.$index, 1)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData1: []
      // tableData2: []
    }
  },
  mounted () {
    this.$http.post('/api/tableData1', { code: 1 }).then(res => {
      this.tableData1 = res.data.rows
    })
    // this.$http.post('/api/tableData2', { code: 1 }).then(res => {
    //   this.tableData2 = res.data.rows
    // })
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计'
          return
        }
        if (index === columns.length - 2) {
          sums[index] = 0
          data.forEach(item => {
            sums[index] += item.price * item.count
          })
          sums[index] = sums[index].toFixed(2) + ' 元'
        } else {
          sums[index] = ''
        }
      })
      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-input-number--small {
    width: 85px;
  }
</style>
