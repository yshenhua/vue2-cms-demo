<template>
  <div class="page-table">
    <block title="员工数据表">
      <staff-sheet />
    </block>
    <block title="产品数据表">
      <product-sheet />
    </block>
    <block title="Table 表格">
      表格是我需求中遇到的比较多的，这里我用 Element 的 Table 、Pagination 等组件封装了一个 table.vue 的组件。这里呈现的两个不同的表格其实就是引用 table.vue 传入了不同的数据。
    </block>
  </div>
</template>

<script>
import Block from '@/base/block/block'
import staffSheet from './staff'
import productSheet from './product'

export default {
  components: {
    Block,
    staffSheet,
    productSheet
  }
}
</script>
