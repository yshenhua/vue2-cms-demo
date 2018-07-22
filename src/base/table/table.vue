<template>
  <div class="table">
    <el-table :data="data.rows" :border="border" :size="size">
      <el-table-column
        v-for="(label, prop) in labelMap"
        :key="prop"
        :prop="prop"
        :label="label"
      ></el-table-column>
      <el-table-column
        v-if="options.length"
        fixed="right"
        label="操作"
        :width="options.join(' ').length * 13 + 20">
        <template slot-scope="scope">
          <el-button
            v-for="option in options"
            :key="option"
            type="text"
            size="small"
            @click="handleRowData(options.indexOf(option), scope.$index, scope.row)">
            {{option}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pager">
      <span class="total">共 <strong>{{data.total}}</strong> 条</span>
      <el-pagination
        v-show="data.total > data.rows.length"
        layout="prev, pager, next, jumper"
        :page-size="10"
        :current-page="data.page"
        :total="data.total"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Pagination } from 'element-ui'

Vue.use(Pagination)

export default {
  props: {
    labelMap: {
      type: Object,
      default: function () {
        return {}
      }
    },
    data: {
      type: Object,
      default: function () {
        return {
          total: 0,
          page: 1,
          rows: []
        }
      }
    },
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('changeData', val)
    },
    handleRowData (option, index, row) {
      this.$emit('changeRowData', option, index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
  .pager {
    display: flex;
    justify-content: space-between;
    .total {
      padding: 2px 5px;
      line-height: 28px;
      font-size: 13px;
      font-weight: 400;
      color: #606266;
    }
  }
</style>
