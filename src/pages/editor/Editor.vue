<template>
  <section>
    <block title="填写产品的详细内容">
      <vue-html5-editor
        :height="400"
        :content="content"
        @change="c => { content = c }"
        class="demo-editor">
      </vue-html5-editor>
      <el-button type="primary" @click="submitEdit">
        完成
      </el-button>
    </block>
    <block title="Vue-html5-editor 富文本编辑器">
      <p>Vue-html5-editor是一个比较简洁的富文本编辑器插件，同时也支持自定义扩展模块，这里的表情模块就是自定义扩展的。</p>
      <a href="https://github.com/PeakTai/vue-html5-editor" target="_blank">插件地址：https://github.com/PeakTai/vue-html5-editor</a>
    </block>
  </section>
</template>

<script>
import Block from '@/base/block/block'

export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    submitEdit () {
      this.$msgbox({
        title: '提交数据',
        message: this.content,
        confirmButtonText: '我知道了'
      })
    }
  },
  components: {
    Block
  }
}
</script>

<style lang="scss" scoped>
  .demo-editor {
    margin-bottom: 20px;
  }
</style>
