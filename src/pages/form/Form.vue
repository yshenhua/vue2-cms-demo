<template>
  <section>
    <h3>Form 表单</h3>
    <p> Element 的 Form 表单包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。其表单验证是引用的 async-validator 这个库。</p>
    <div class="demo-block">
      <el-form
        :model="form"
        :rules="rules"
        status-icon
        label-width="80px"
        ref="form"
        class="demo-form">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入活动名称 长度在 5 到 20 个字符"></el-input>
        </el-form-item>
        <el-form-item label="活动日期" prop="date">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动时间" prop="time">
          <el-time-picker arrow-control v-model="form.time" placeholder="选择时间"></el-time-picker>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="form.type" class="form-type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="详细内容" prop="desc">
          <el-input
            v-model="form.desc"
            type="textarea"
            resize="none"
            :autosize="{ minRows: 2, maxRows: 5}">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立 即 创 建</el-button>
          <el-button @click="resetForm">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        time: '',
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        time: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // console.log(this.form)
          this.$msgbox({
            title: '获取到的数据',
            message: this.form,
            confirmButtonText: '我知道了'
          })
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-form {
    width: 500px;
    .el-checkbox-group {
      .el-checkbox {
        margin-left: 0;
        width: 160px;
      }
    }
  }
</style>
