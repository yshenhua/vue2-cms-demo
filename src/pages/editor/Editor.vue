<template>
  <section>
    <h3>Vue-html5-editor 富文本编辑器</h3>
    <p>Vue-html5-editor是一个比较简洁的富文本编辑器插件，同时也支持自定义扩展模块（下面的表情模块就是自定义扩展的）。</p>
    <p><a href="https://github.com/PeakTai/vue-html5-editor">插件地址：https://github.com/PeakTai/vue-html5-editor</a></p>
    <div class="demo-block">
      <vue-html5-editor
        :height="400"
        :content="content"
        @change="c => { content = c }"
        class="demo-editor">
      </vue-html5-editor>
      <el-button type="primary" @click="submitEdit">
        提 交 富 文 本 框
      </el-button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      content: '扯淡、吐槽、表扬、鼓励……想说啥就说啥！'
    }
  },
  methods: {
    submitEdit () {
      this.$msgbox({
        title: '获取到的数据',
        message: this.content,
        confirmButtonText: '我知道了'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-editor {
    margin-bottom: 20px;
  }
</style>
