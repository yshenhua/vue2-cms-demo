<template>
  <section>
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
    <div class="demo-block">
      <el-table :data="tableData2" border>
      </el-table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tableData1: [],
      tableData2: []
    }
  },
  mounted () {
    this.$http.post('/api/tableData1', { code: 1 }).then(res => {
      this.tableData1 = res.data.rows
    })
  }
}
</script>
